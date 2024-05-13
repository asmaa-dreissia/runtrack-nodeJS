const fs = require('fs');
const directoryPath = String.raw`C:\Users\adrei\Documents\la plateforme\runtrack-nodeJS\jour1`;

fs.readdir(directoryPath, (_, files) => {
    files.forEach((file) => {
        console.log(file);
    });
});
