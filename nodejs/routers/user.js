const express = require("express");
const pool = require("../sqlpool");
const router = express.Router();

router.post("/login",(req,res)=>{
    const{uname,upwd} = req.body;
    var alt_userName = uname;
    var alt_upwd = upwd;
    // var alt_userName = req.uname;
    var sql=`SELECT * FROM alt_user WHERE alt_userName=?&&alt_upwd=?`;
    pool.query(sql,[alt_userName,alt_upwd],(err,result)=>{
        if(err)throw err;
        result.length>0?res.send("1"):res.send("0");
    })
})



module.exports=router;