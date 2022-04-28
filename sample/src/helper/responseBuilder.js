
function success(data){
    let value = {
        "code":200,
        "message":"The request was succesful",
        "data":data
    }
    return value;
}
function values(value){
    if(value==null)
        return 'No record';
   else
      return value;
}
module.exports={
    success,
    values
}