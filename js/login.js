$(()=>{

    $(".login_btn").click(function (){
        var uname = $("[name=uname]").val();
        var upwd = $("[name=password]").val();
        var data={
            uname,
            upwd
        }
        console.log(data);
        $.ajax({
            url:"http://127.0.0.1:3000/user/login",
            type:"post",
            data,
            xhrFields:{withCredentials:true},
            success:function(result){
                console.log(result);
                if(result.code>0){
                    window.open("index.html","_self")
                }else{
                    $("[name=uname]").val("");
                    $("[name=password]").val("");
                    var span = $(".err_tip")[0].children[1]
                    var em = $(".err_tip")[0].children[0];
                    $(span).html("登录名与密码不匹配，请重新输入！");
                    $(".err_tip").addClass("error");
                    em.style.backgroundPosition="-104px -75px";
                    console.log(em.style.backgroundPosition)
                    
                }
            }
        })
        
    })
})

var uname = document.getElementsByName("uname")[0];
var pwd = document.getElementsByName("password")[0];
var name_icon = document.getElementsByClassName("name_icon")[0];
var upwd_icon = document.getElementsByClassName("upwd_icon")[0];
uname.addEventListener("focus",function(){
    name_icon.style.backgroundPosition="0 -48px";
})
uname.addEventListener("blur",function(){
    name_icon.style.backgroundPosition="0 0";
})
pwd.addEventListener("focus",function(){
    upwd_icon.style.backgroundPosition="-48px -48px";
})
pwd.addEventListener("blur",function(){
    upwd_icon.style.backgroundPosition="-48px 0";
})

