
const utilsping = require('../../utils/utilsping');
const responseBuilder = require('../../helper/responseBuilder');
const data = require('../../docs/medicineData.json');
const fs = require('fs');
function ping(request,response){
    let value = data.find((data)=> data.id == request.query.id )
    if(value==null){
        response.send(responseBuilder.success(data));
    }
    else{
        response.send(responseBuilder.success(value));
    }
     
}


// function push(request,response){
//         var data = JSON.stringify(request.query);
//         console.log(data);
//         fs.writeFile('../../docs/medicineData.json',data,err=>{
//             if(err)
//             console.log(err);
//             return
//     });
//     response.send('Value added!');
//  }
module.exports={
    ping
    //push
}