const process = require('process');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'secret-folder');

fs.promises.readdir(dirPath, { withFileTypes: true })
    .then(results => {
        results.forEach(result => {
            if (result.isFile()) {
                const filePath = path.join(dirPath, result.name);
                const fileName = path.basename(filePath);
                const ext = path.extname(filePath);
                fs.promises.stat(filePath).then(res => {
                    console.log(`${fileName.split('.')[0]}-${ext.split('.')[1]}-${res.size}byte`)
                })
            }
        });
    });
