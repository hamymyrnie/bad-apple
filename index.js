// GIF Frame Converter to PNG
/* Personal converter of GIF to Spritesheet/PNG data.
 *
 */
const NodeSpriteGen = require('node-sprite-generator');
const FileSys = require('fs-extra');
const Numeral = require(`numeral`);
const JIMP = require('jimp');

//
FileSys.ensureDir(`./frames/`);
FileSys.ensureDir(`./out-img/`)
FileSys.ensureDir(`./out-sprsht/`);

const DAT = new Date();
const Batch = DAT.getTime();

const Path = "./frames/"; 
const Out = `./out-img/BATCH - ${Batch}`;

FileSys.ensureDir(Out);
FileSys.readdir(Path).then(files => {
    var Files = 0;
    files.forEach((file) => {
        console.log(`Reading file: ${file}`);
        JIMP.read(`${Path}/${file}`).then(image => {
            var OutPath = `${Out}/frame${parseInt(file.slice(6,10))}.png`;
            console.log(`Read: ${file} -- Attempting to Convert`);

            image
                .quality(100)
                .write(OutPath);

            console.log(`SUCCESS -> ${OutPath}`);
            Files++;
        })
    });
})