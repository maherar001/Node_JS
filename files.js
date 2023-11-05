const fs = require("fs");

fs.readFile('./Doc/text.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString())
});

