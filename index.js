// GIF Frame Converter to PNG
const FileSys = require('fs-extra');
const JIMP = require('jimp');

const DAT = new Date();

var Path = "./frames/"; 
var Out = `out/BATCH - ${DAT.getTime()}`;

FileSys.ensureDir(Out);
FileSys.readdir(Path).then((files) => {
    files.forEach((file) => {
        console.log(`Reading file: ${file}`);
        JIMP.read(`${Path}/${file}`).then(image => {
            var OutPath = `${Out}/${file.slice(6, 10)}.png`;
            console.log(`Read: ${file} -- Attempting to Convert`);

            image
                .quality(100)
                .write(OutPath);

            console.log(`SUCCESS -> ${OutPath}`);
        }).catch(err => console.error);
    });
})