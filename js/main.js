var goTop = document.querySelector(".icon-gotop")
window.onscroll = function () {
    var aa = document.body.scrollTop || document.documentElement.scrollTop;
    if (aa > 10) {
        goTop.style.display = "block"
    } else {
        goTop.style.display = "none"
    }
}
goTop.onclick = function () {
    window.scrollTo(0, 0);
}

// 底部轮播图
var ul = document.querySelector(".brand_list");
var i = 0;
var length = 1230;

function moveTo(to) {
    if (!to) {
        to = i + 1;
    }
    if (i == 0) {
        if(to>i){
            ul.className = "brand_list clearfix tr";
        }else{
            ul.className = "brand_list clearfix";
            ul.style.marginLeft = -length * 3 + "px";
            setTimeout(function(){
                moveTo(2);
              },100);
              return;
        }
    }
    i = to;
    ul.style.marginLeft = -i * length + "px";
    if (i == 3) {
        i = 0;
        setTimeout(function () {
            ul.className = "brand_list clearfix";
            ul.style.marginLeft = 0;
        }, 500)
    }
}
// setInterval(function () {
//     moveTo()
// }, 3000)

var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
//用开关，控制，上次动画没有播放完，下次动画不能开始！
var canClick=true;
btnRight.onclick=function(){
  //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
  move(1)
}
//两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
function move(n){
  if(canClick){//只有可以单击时
    moveTo(i+n);//才调用真正移动ul的方法
    canClick=false;//马上把开关关上，禁止再次点击
    //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
    setTimeout(function(){
      canClick=true;
    },600);
  }
}
btnLeft.onclick=function(){
  move(-1);
}