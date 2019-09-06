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
    var sql = `SELECT id,alt_userName FROM alt_user WHERE alt_userName=?&&alt_upwd=?`;
    pool.query(sql, [alt_userName, alt_upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            var id = result[0].id;
            var userName = result[0].alt_userName;
            req.session.uid=id;
            req.session.userName=userName;
            console.log(userName);
            console.log(req.session);
            console.log(req.sessionID);
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:0,msg:"用户名或密码有误"})
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
    console.log(req.sessionID);
    var uid = req.session.uid;
    console.log(uid);
    console.log(req.session)
    if(req.session.uid){
        res.send("1");
    }else{
        res.send({code:0,msg:"未登录"})
    }
})

module.exports = router;