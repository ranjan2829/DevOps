const express = require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to ranjan's app !");

});
app.listen(3000,function(){
    console.log("app is listening to port 3000");
});