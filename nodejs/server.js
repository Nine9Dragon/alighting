const express = require("express");
const session = require("express-session");
const bodyParse = require("body-parser");
const cors = require("cors");
const user = require("./routers/user");
const product = require("./routers/details");

var app = express();
app.listen(3000);
console.log("服务器已经运行在3000端口");
app.use(cors({
    origin:["http://127.0.0.1","http://localhost","http://127.0.0.1:5500","http://localhost:5500"],
    credentials:true
}))
app.use(session({
    //安全字符串
    secret: "128位字符串",
    //每次请求保存数据
    resave: true,
    //保存初始化数据
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(bodyParse.urlencoded({
    extended:false
})) 



app.use("/user",user);
app.use("/product",product);



