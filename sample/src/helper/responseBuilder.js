
function success(data){
    let value = {
        "code":200,
        "message":"The request was succesful",
        "data":data
    }
    return value;
}

module.exports={
    success
}