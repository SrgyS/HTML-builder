const path = require('path');
const fs = require('fs');
const stylesPath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist/bundle.css');
const output = fs.createWriteStream(bundlePath);

//fs.promises.readdir(stylesPath).then((files) => {
//    files.forEach((file) => {
//        const filePath = path.join(stylesPath, file);
//        const fileName = path.basename(filePath);
//        const ext = path.extname(filePath);
//        if (ext === '.css') {
//            const input = fs.createReadStream(path.join(stylesPath, fileName));
//            input.on('data', data => {
//                output.write(data.toString() + '\n');
//            });
//        };
//    });
//    console.log('file bundle.css created')
//});
