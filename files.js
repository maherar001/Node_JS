const fs = require("fs");

//read file
// fs.readFile('./Doc/text.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// });

//write file 
fs.writeFile('./Stream.js', 'Hello Hafiz!', () =>{
    console.log('file was written');
});

//Directories 
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('Folder created');
//     })
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

//delete file
// if(fs.existsSync('./doc/text.txt'))
// {
//     fs.unlink('./doc/text.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     })
// }
// else{
//     console.log("No such file exists.")
// }
