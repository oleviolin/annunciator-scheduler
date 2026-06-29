# Announcement scheduler
# or
# The Vedbæk Harbour Party Announcement software

## Installation

[Download and install node JS](https://nodejs.org/en/download

Make below directory structure on your computer.
You may download it from 
[Github](https://github.com/oleviolin/annunciator-scheduler
You need following directory structure

annoncment_sceduler/     <-- or other directory of choice           \ <br>
├── audio/            <-- Drop your MP3s and subfolders here        \ <br>
├── public/                                                         \ <br>
│   └── index.html    <-- The user interface                        \ <br>
├── server.js         <-- The Node.js backend                       \ <br>
├── package.json                                                    \ <br>

</p>

in the audio/ folder (or any subfolder of the audio/-folder
put some mp3 files, the mp3 files must start with the string HH_MM_ 
were the HH stands for 24 -hour format hour of annoncement
run the command 

run the command 
```
npm init -y
npm install express

```


## Usage

Start a command promt 
(preferably node.js command prompt)
Navigate to the directory of the server.js file (\announcemnet_sceduler)
run the command 

Put som files into the audio directory

run the command: 
```javascript
node server.js
```
[open a browser at] (localhost:3000
Click on the Start Announcer button.

(Remember to restart the server -- node server.s -- if you change code)

## License

[MIT](https://choosealicense.com/licenses/mit/)


# The story

Scheduled speach anouncer in node.js


## Gemini startup

Once upon a time my collegue walked into my office and asked if could help him makeing some software for the harbour yearly party in Vedbæk, 
where he was making the PA-sound, and the speaches of what was going to happen every hour or so.
I made a speach anouncement in javascript, working in Microsoft explorer. It took me 3 hours to program I remember he was quite impressed, He still uses the program (H has kept an old computer where MSIE is still working.
The program searches for mp3 files that has to be named HH_MM_text.mp3 where HH_MM is the (24-hour format) Hour and minute the file is played. just a clock and a list of files to be played.
MSIE was allowed to list files on the local directory, of course that is not possible today, but you can do it with NodeJS today.
I think think I would like the files to be in different subdirectories. The user interface should be a clock, and a list of next files to be played and how many minutes remaining for each file.

Can you do that for me? 

