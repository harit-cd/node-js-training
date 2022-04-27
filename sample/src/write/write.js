const fs = require('fs');
const writeFiles = (path,content) =>{
    fs.writeFile(path, content, err => {
        if (err) {
          console.error(err)
          return
        }
})
}
module.exports={
 writeFiles: writeFiles   
}