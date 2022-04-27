
function welcome(){
    console.log("Welcome!");
}
function fun(message){
    console.log(message);
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
module.exports = {
    welcome : welcome,
    baseError:baseError,
    baseSuccess:baseSuccess,
    wait:wait,
    fun:fun,
}
