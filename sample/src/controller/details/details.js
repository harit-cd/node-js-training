const responseBuilder = require('../../helper/responseBuilder');
const express = require('express');
const data = require('../../docs/data.json');

function getValue(request,response){
    response.send(responseBuilder.values(data));
}
function getByName(request,response){
    let value=data.find((data)=>data.name==request.query.name);
    response.send(responseBuilder.values(value));
    }


module.exports={
    getByName,
    getValue
}