const express = require("express");
 const path = require("path");
const app = express();

app.get("/",(req,res)=>{
 res.sendfile(path.join(_dirname + "/public/index.ejs"))
});
app.listen(3000, ()=>{
    console.log("servidor escuchando",3000);
});