const express = require('express');
const router = express.Router();

router.get('/list',(request,response)=>{
    console.log('Listing all the godown');
    response.send("Listed godowns");
})

module.exports=router;