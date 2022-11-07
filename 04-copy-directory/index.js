const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'files');
const dirCopyPath = path.join(__dirname, 'files-copy');



//не работает как надо

//fs.promises.readdir(path.join(__dirname)).then((files) => {
//    files.forEach((file) => {
//        const filePath = path.join(__dirname, file);
//        const fileName = path.basename(filePath);
//        if (fileName === 'files-copy') {
//            fs.rm(dirCopyPath, { recursive: true }, (err) => {
//                if (err) throw err;
//            });
//        };
//    });
//});

//function copyFiles() {
//    fs.mkdir(dirCopyPath, () => console.log('create directory'));
//    fs.promises.readdir(dirPath).then(files => {
//        files.forEach(file => {
//            const filePath = path.join(__dirname, 'files', file);
//            fs.promises.copyFile(filePath, path.join(__dirname, 'files-copy', file));
//        });

//    })
//};
//copyFiles();
