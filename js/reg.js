var uname = document.getElementsByName("uname")[0];
var upwd = document.getElementsByName("upwd")[0];
var password = document.getElementsByName("password")[0];
var phone = document.getElementsByName("phone")[0];
var check = /^[\w-]{4,20}$/;

uname.addEventListener("focus",function(){
    var info = uname.parentElement.nextElementSibling;
    info.innerHTML="请输入4-20位的字符"
    info.style.color="#00B7EE"
})
uname.addEventListener("blur",function(){
    var info = uname.parentElement.nextElementSibling;
    console.log(uname.value);
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
