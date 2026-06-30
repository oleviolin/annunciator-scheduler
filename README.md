
# The yearly Vedbæk Harbourparty Announcement Scheduler software v 2.0

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
[open a browser at localhost:3000] (https://localhost:3000)
Click on the Start Announcer button.

## Stopping the server
Stop the server by entering **ctrl-C** in the window from where the server was storted, or closing the (node command) window

Remember to restart the server -- node server.js -- if you change code

## License

[MIT](https://choosealicense.com/licenses/mit/)






