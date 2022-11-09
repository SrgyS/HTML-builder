const process = require('process');
const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;
const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);

stdout.write('Greetings! Please enter the text:\n')
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        sayBye();
    }
    fs.appendFile(filePath,
        data,
        (err) => {
            if (err) throw err;
            console.log('text written')
        },
    )

});

function sayBye() {
    stdout.write('\nBye! Good luck!\n');
    exit();
}
process.on('SIGINT', sayBye);
