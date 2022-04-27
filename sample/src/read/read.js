let fs = require('fs');

const readFiles = (path) => {
    fs.readdir(path,(err,files)=>{
        if(err)
          console.log(err)
        console.log(files)

    })
}

const readFile = (path) =>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err)
          console.log(err);
        console.log(data);
    })
}
module.exports={
    readFiles:readFiles,
    readFile:readFile
}