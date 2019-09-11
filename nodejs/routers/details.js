const express = require("express");
const pool = require("../sqlpool");
const router = express.Router();

router.get("/details2",(req,res)=>{
    var sql = "SELECT `alt_details`.did,`alt_details`.company,`alt_details`.linkman,`alt_details`.phone,`alt_details`.watch,`alt_details`.title,`alt_details`.price,`alt_details`.property,`alt_details_img`.sm,`alt_details_img`.md,`alt_details_img`.lg,`alt_details_img`.introduce  FROM `alt_details`, `alt_details_img` WHERE `alt_details`.did = `alt_details_img`.did AND `alt_details`.did=1";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

router.get("/anthor",(req,res)=>{
    var family = req.query.family;
    var sql = "SELECT img_src,title,price FROM `alt_similar_details` WHERE family=?"
    pool.query(sql,[family],(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

module.exports = router;