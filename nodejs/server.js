const express = require("express");
const bodyParse = require("body-parser");
const user = require("./routers/user");
const cors = require("cors");

var app = express();
app.listen(3000);
console.log("服务器已经运行在3000端口");
app.use(cors({
    origin:"http://127.0.0.1:5500"
}))
app.use(bodyParse.urlencoded({
    extended:false
})) 
app.use("/user",user);




