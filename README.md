
# The yearly Vedbæk Harbourparty Announcement Scheduler software

## Installation
While the original Vedbæk Harbour Party Announcement software 1.00 was running in Microsoft Internet Explorer (MSIE), 
running out of the box on your local machine, this software requires to install NodeJS, which is a special software which can run JavaScript locally on your computer

[Download and install node JS](https://nodejs.org/en/download)


You may the annunciator-scheduler download it from [https://github.com/oleviolin/](https://github.com/oleviolin/)
[Github](https://github.com/oleviolin/annunciator-scheduler)
You need following directory structure
You need to create the only audio subdirectory.
annoncment_sceduler/     <-- or other directory of choice                 <br>
|── node_modules/      < --  (auto installed by the npm init - y command) <br>
├── audio/            <-- Drop your MP3s and subfolders here             <br>
├── public/            <-- Auto installed                                <br>
│   └── index.html    <-- The user interface                             <br>
├── server.js         <-- The Node.js backend server                     <br>
├── package.json                                                          <br>

</p>

in the audio/ folder (or any subfolder of the audio/-folder)
put some mp3 files, the mp3 files must start with the string HH_MM_ 
were the HH stands for 24 -hour format hour of annoncement

If you have git installed you can run the command
```
git clone https://github.com/oleviolin/annunciator-scheduler

```
Initialize the package by running the commands 
```
npm init -y
npm install express
mkdir audio
```


## Usage

Put some mp3 files into the audio subdirectory and make ture their name starts in the 24-hour HH-MM-format.<br>
for example a file called 13-15-sometext.mp3 will start playing at 1.15 PM.

Start a command promt 
(preferably node.js command prompt)
Navigate to the directory of the server.js file (\announcemnet-sceduler)


## Start the Nodejs server on you local computer
run the command: 
```javascript
node server.js
```
Alternatively you may use the simpler command:
```javascript
node server
```
[open a browser at] (https://localhost:3000
Click on the Start Announcer button.

## Stopping the server
Stop the server by entering ctrl-C in the window from where the server was storted, or closing the (node command) window

Remember to restart the server -- node server.js -- if you change code

## License

[MIT](https://choosealicense.com/licenses/mit/)


# The story

Scheduled speach anouncer in node.js


## Gemini startup

Once upon a time my collegue Bjarne walked into my office and asked if could help him makeing some software for the harbour yearly party in Vedbæk, 
where he was making the PA-sound, and the speaches of what was going to happen every hour or so.
I made a speach anouncement in javascript, working in Microsoft explorer. I remember it took me 3 hours to program  he was quite impressed, Bjarne still uses the program (he has kept an old computer where MSIE is still working.
The program searches for mp3 files that has to be named HH_MM_text.mp3 where HH_MM is the (24-hour format) Hour and minute the file is played. just a clock and a list of files to be played.
MSIE was allowed to list files on the local directory, of course that is not possible today, but you can do it with NodeJS today.
I think think I would like the files to be in different subdirectories. The user interface should be a clock, and a list of next files to be played and how many minutes remaining for each file.
<p>This is an update of the program, using NodeJS instead of MSIE.




