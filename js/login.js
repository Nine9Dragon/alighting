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
            success:function(result){
                console.log(result);
                result>0?window.open("index.html","_self"):alert("登录失败")
            }
        })
        
    })
})