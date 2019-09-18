const express = require("express");
const pool = require("../sqlpool");
const router = express.Router();

router.post("/login", (req, res) => {
    const {
        uname,
        upwd
    } = req.body;
    var alt_userName = uname;
    var alt_upwd = upwd;
    // var alt_userName = req.uname;
    var sql = `SELECT uid,alt_userName FROM alt_user WHERE alt_userName=?&&alt_upwd=?`;
    pool.query(sql, [alt_userName, alt_upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            var id = result[0].uid;
            var userName = result[0].alt_userName;
            req.session.uid=id;
            req.session.userName=userName;
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:0,msg:"用户名或密码有误"})
        }
    })
})

router.post("/hasReg",(req,res)=>{
    var uname = req.body.uname;
    console.log(uname);
    var sql = "SELECT uid FROM alt_user WHERE alt_userName=?";
    pool.query(sql,[uname],(err,result)=>{
        if(err)throw err;
        if(result.length > 0){
            res.send({code:1,msg:"用户已存在"});
        }else{
            res.send({code:0,msg:"用户名可用"})
        }
    })
})

router.post("/reg", (req, res) => {
    const {
        uname,
        upwd
    } = req.body;
    console.log(uname, upwd);
    var sql = "INSERT INTO alt_user (alt_userName,alt_upwd) VALUE (?,?)";
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("1")
    })
})

router.get("/isLogin",(req,res)=>{
    var userName = req.session.userName;
    if(userName){
        res.send({code:1,msg:"登陆成功", data:userName});
    }else{
        res.send({code:0,msg:"未登录"})
    }
})
router.get("/logOut",(req,res)=>{
    console.log(req.session);
    req.session.destroy();
    console.log(req.session);
    res.send("111");
})

router.get("/snzm",(req,res)=>{
    var sql = "SELECT img_url,title,details,factory FROM `alt_snzm`";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})




module.exports = router;