var uname = document.getElementsByName("uname")[0];
var upwd = document.getElementsByName("upwd")[0];
var password = document.getElementsByName("password")[0];
var phone = document.getElementsByName("phone")[0];
var reg_btn = document.getElementsByClassName("reg_btn")[0];
var check = /^[\w-]{4,20}$/;
var checkPhone = /^1[345678]\d{9}$/

uname.addEventListener("focus",function(){
    var info = uname.parentElement.nextElementSibling;
    info.innerHTML="请输入4-20位的字符"
    info.style.color="#00B7EE"
})
uname.addEventListener("blur",function(){
    var info = uname.parentElement.nextElementSibling;
    if(!uname.value){
        info.innerHTML="用户名不能为空"
        info.style.color="#d82618";
        return
    }
    if(check.test(uname.value)){
        axios.post("http://127.0.0.1:3000/user/hasReg","uname="+uname.value).then(res=>{
            if(res.data.code){
                info.innerHTML=res.data.msg
                info.style.color="#d82618"
            }else{
                info.innerHTML=res.data.msg
                info.style.color="#00B7EE"
            }
        }).catch(err=>{
            console.log(err);
        })
    }else{
        info.innerHTML="用户名只能用英文、数字及 -、_ 组成的4-20位字符"
        info.style.color="#d82618"
    }
})

upwd.addEventListener("blur",function(){
    var info = upwd.parentElement.nextElementSibling;
    if(check.test(upwd.value)){
        if(uname.value==upwd.value){
            info.innerHTML="用户名和密码不能相同"
            info.style.color="#d82618"
        }else{
            info.innerHTML = "";
        }
        
    }else{
        info.innerHTML="密码只能用英文、数字及 -、_ 组成的4-20位字符"
        info.style.color="#d82618"
    }
})
password.addEventListener("blur",function(){
    var info = password.parentElement.nextElementSibling;
    if(password.value==upwd.value){
        info.innerHTML = "";
    }else{
        info.innerHTML="两次密码不一致"
        info.style.color="#d82618"
    }
})

phone.addEventListener("blur",function(){
    var info = phone.parentElement.nextElementSibling;
    if(!checkPhone.test(phone.value)){
        info.innerHTML = "手机号格式不正确";
        info.style.color="#d82618";
    }
})


reg_btn.addEventListener("click",function(){
    if(uname.value){
        if(uname.parentElement.nextElementSibling.innerHTML=="用户名可用"){
            if(check.test(upwd.value)){
                if(uname.value!==upwd.value){
                    if(password.value==upwd.value){
                        if(checkPhone.test(phone.value)){
                            axios.post("http://127.0.0.1:3000/user/reg",`uname=${uname.value}&upwd=${password.value}`).then(result=>{
                                if(result.data){
                                    window.open("./login.js","_self");
                                }
                            }).catch(err=>{
                                console.log(err);
                            })
                        }
                    }
                }
            }
        }
    }
})



