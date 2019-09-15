const express = require("express");
const pool = require("../sqlpool");
const router = express.Router();

router.get("/details2", (req, res) => {
    var sql = "SELECT `alt_details`.did,`alt_details`.company,`alt_details`.linkman,`alt_details`.phone,`alt_details`.watch,`alt_details`.title,`alt_details`.price,`alt_details`.property,`alt_details_img`.sm,`alt_details_img`.md,`alt_details_img`.lg,`alt_details_img`.introduce  FROM `alt_details`, `alt_details_img` WHERE `alt_details`.did = `alt_details_img`.did AND `alt_details`.did=1";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

router.get("/anthor", (req, res) => {
    var family = req.query.family;
    var sql = "SELECT img_src,title,price FROM `alt_similar_details` WHERE family=?"
    pool.query(sql, [family], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

router.get("/addCart", (req, res) => {
    console.log(req.session)
    if(req.session.uid){
        var {company,linkman,phone,img,title,price, count,details_id} = req.query;
        var userid = req.session.uid;
        console.log(company,linkman,phone,img,title,price, count,details_id);
        var sql1 = "SELECT cid FROM alt_cart WHERE userid = ? AND details_id = ?";
        pool.query(sql1,[userid,details_id],(err,result)=>{
            if(err)throw err;
            if(result.length==0){
                var sql = `INSERT INTO alt_cart VALUES(null,'${company}','${linkman}','${phone}','${img}','${title}',${price},${count},${userid},${details_id})`;
                
            }else{
                var sql = `UPDATE alt_cart SET count=count+1 WHERE userid=${userid} AND details_id=${details_id}`;
            }
            pool.query(sql,(err,result)=>{
                if(err)throw err;
                //8:如果sql UPDATE INSERT DELETE
                //判断执行成功 result.affectedRows 影响行数
                if(result.affectedRows>0){
                 res.send({code:1,msg:"商品添加成功"});
                }else{
                 res.send({code:0,msg:"添加失败"}); 
                }
            
            })
        })
        // res.send("1");
    }else{
        res.send({code:0,data:"请登录"});
    }
})

router.get("/searchCart",(req,res)=>{
    if(req.session.uid){
        var userid = req.session.uid;
        var sql = "SELECT cid,company,linkman,phone,img,title,price, count,details_id FROM alt_cart WHERE userid = ?"
        pool.query(sql,[userid],(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send({code:1,data:result})
        })
    }else{
        res.send({code:0,data:"请登录"});
    }
})

router.get("/del",(req,res)=>{
    var cid = req.query.cid;
    // console.log(cid)
    var sql = "DELETE FROM alt_cart WHERE cid = ? ";
    pool.query(sql,[cid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send("1");
    })
})

module.exports = router;