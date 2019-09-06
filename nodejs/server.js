const express = require("express");
const session = require("express-session");
const bodyParse = require("body-parser");
const cors = require("cors");
const user = require("./routers/user");

var app = express();
app.listen(3000);
console.log("服务器已经运行在3000端口");
app.use(session({
    //安全字符串
    secret: "128位字符串",
    //每次请求保存数据
    resave: true,
    //保存初始化数据
    saveUninitialized: true
}))
app.use(cors({
    origin:"http://127.0.0.1:5500"
}))
app.use(bodyParse.urlencoded({
    extended:false
})) 


app.use("/user",user);




