const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const AUDIO_DIR = path.join(__dirname, 'audio');

app.use(express.static('public'));
app.use('/audio', express.static(AUDIO_DIR));
app.use(express.json()); // Allow Node to read JSON requests from the browser

function findAudioFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findAudioFiles(filePath, fileList);
        } else if (file.toLowerCase().endsWith('.mp3')) {
            const match = file.match(/^(\d{2})_(\d{2})_(.+)\.mp3$/i);
            if (match) {
                fileList.push({
                    hour: parseInt(match[1], 10),
                    minute: parseInt(match[2], 10),
                    timeString: `${match[1]}:${match[2]}`,
                    text: match[3].replace(/_/g, ' '),
                    url: '/audio/' + path.relative(AUDIO_DIR, filePath).replace(/\\/g, '/')
                });
            }
        }
    });
    return fileList;
}

app.get('/api/schedule', (req, res) => {
    try {
        const schedule = findAudioFiles(AUDIO_DIR);
        schedule.sort((a, b) => (a.hour * 60 + a.minute) - (b.hour * 60 + b.minute));
        res.json(schedule);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error reading directory' });
    }
});

// NEW: Endpoint to rename the file and push the time back
app.post('/api/delay', (req, res) => {
    const { url, addMinutes } = req.body;
    
    // Convert the URL back to a local file path
    const relativePath = decodeURIComponent(url.replace('/audio/', ''));
    const oldFilePath = path.join(AUDIO_DIR, relativePath);

    if (!fs.existsSync(oldFilePath)) return res.status(404).json({ error: 'File not found' });

    const fileName = path.basename(oldFilePath);
    const dirName = path.dirname(oldFilePath);
    const match = fileName.match(/^(\d{2})_(\d{2})_(.+)\.mp3$/i);

    if (match) {
        let hour = parseInt(match[1], 10);
        let minute = parseInt(match[2], 10);
        
        // Add minutes and handle hour roll-over (e.g., 14:58 + 5 mins = 15:03)
        minute += addMinutes;
        hour += Math.floor(minute / 60);
        minute = minute % 60;
        hour = hour % 24; 

        const newHour = String(hour).padStart(2, '0');
        const newMinute = String(minute).padStart(2, '0');
        const newFileName = `${newHour}_${newMinute}_${match[3]}.mp3`;
        const newFilePath = path.join(dirName, newFileName);

        try {
            fs.renameSync(oldFilePath, newFilePath);
            res.json({ success: true });
        } catch (err) {
            res.status(500).json({ error: 'Failed to rename file' });
        }
    } else {
        res.status(400).json({ error: 'Invalid file format' });
    }
});

app.listen(PORT, () => {
    console.log(`⚓ Harbour Party Announcer is live on http://localhost:${PORT}`);
});