
function ping(number){
    let square = number * number;
    return square;
}

function add(number1,number){
    const sum = parseInt(number) + parseInt(number1);
    return sum;
}

module.exports={
    ping,
    add
}

