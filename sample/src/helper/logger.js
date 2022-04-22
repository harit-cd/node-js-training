
function welcome(){
    console.log("Welcome!");
}

function baseSuccess(success){
    console.log("[From logger]",new Date(),success);
}
function baseError(error){
    console.log("[From logger]",new Date(),error);
}
function wait(time,message){
        setTimeout(()=>{
            console.log(message)
        },time)
}
let tempData ='hello'
module.exports = {
    welcome : welcome,
    baseError:baseError,
    baseSuccess:baseSuccess,
    wait:wait,
    data:tempData
}
