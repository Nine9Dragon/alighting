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

var search = document.getElementById("search")
var searchBtn = document.querySelector(".input-submit");
var near_hot_search = document.querySelector(".near-hot-search");
search.addEventListener("input",function(){
  near_hot_search.style.opacity="0";
  if(search.value === ""){
    near_hot_search.style.opacity="1";
  }
})
searchBtn.addEventListener("click",function(){
  if(search.value){
    window.open(`../public/category.html?title=${search.value}`,"_self")
    // axios.post("http://127.0.0.1:3000/product/searchDetail",`title=${search.value}`).then(res=>{
     
    // }).catch(err=>{
    //   console.log(err);
    // })
  }
})
search.addEventListener("keydown",function(e){
  if(e.keyCode == 13){
    if(search.value){
      window.open(`../public/category.html?title=${search.value}`,"_self")
      // axios.post("http://127.0.0.1:3000/product/searchDetail",`title=${search.value}`).then(res=>{
       
      // }).catch(err=>{
      //   console.log(err);
      // })
    }
  }
})




//首页轮播图
var ul = document.querySelectorAll(".ppt ul")[0]
var list = ul.children;
var ol = document.querySelectorAll(".tab ol")[0]
var points = ol.children;
var x = 0;

function up(m) {
  if (!m) {
    m = x + 0;
  }
  for (var j = 0; j < list.length; j++) {
    list[j].className = "";
    points[j].className = "";
  }
  x = m;
  if (x == 5) {
    x = 0
  }
  list[x].className = "list_active"
  points[x].className = "on";
  x++;
}
setInterval(function () {
  up();
}, 3000)
var canClick = true;
ol.onclick = function (e) {
  if (canClick) {
    canClick=false;
    var li = e.target;
    if (li.nodeName == "LI") {
      if (li.className !== "on") {
        for (var i = 0; i < points.length; i++) {
          if (points[i] == li) {
            break;
          }
        }
        up(i);
        setTimeout(function () {
          canClick = true;
        }, 300);
      }
    }
  }
}






// 底部轮播图

var i = 0;
var LIWIDTH = 1230;
var DURATION = 500;
var LICOUNT = 3;
var ulImgs = document.querySelector(".brand_list");

function moveTo(to) {
  if (to == undefined) {
    to = i + 1;
  }
  if (i == 0) {
    if (to > i) {
      ulImgs.className = "brand_list clearfix tr";
    } else {
      ulImgs.className = "brand_list clearfix";
      ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
      setTimeout(function () {
        moveTo(LICOUNT - 1);
      }, 100);
      return;
    }
  }
  i = to;
  ulImgs.style.marginLeft = -i * LIWIDTH + "px";
  if (i == LICOUNT) {
    i = 0;
    setTimeout(function () {
      ulImgs.className = "brand_list clearfix";
      ulImgs.style.marginLeft = 0;
    }, DURATION)
  }
}
var btnLeft = document.getElementById("btn-left");
var btnRight = document.getElementById("btn-right");
//用开关，控制，上次动画没有播放完，下次动画不能开始！
var canClick = true;
btnRight.onclick = function () {
  //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
  move(1)
}
//两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
function move(n) {
  if (canClick) { //只有可以单击时
    moveTo(i + n); //才调用真正移动ul的方法
    canClick = false; //马上把开关关上，禁止再次点击
    //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
    setTimeout(function () {
      canClick = true;
    }, DURATION + 100);
  }
}
btnLeft.onclick = function () {
  move(-1);
}

var timer = setInterval(function () {
  moveTo()
}, 3000)



// var ul = document.querySelector(".brand_list");
// var i = 0;
// var length = 1230;

// function moveTo(to) {
//     if (!to) {
//         to = i + 1;
//     }
//     if (i == 0) {
//         if(to>i){
//             ul.className = "brand_list clearfix tr";
//         }else if(i<1){
//             ul.className = "brand_list clearfix";
//             ul.style.marginLeft = -length * 3 + "px";
//             console.log(i);
//             setTimeout(function(){
//                 moveTo(2);
//               },100);
//               return;
//         }
//     }
//     i = to;
//     console.log("正常的"+i)
//     ul.style.marginLeft = -i * length + "px";
//     if (i == 3) {
//         i = 0;
//         setTimeout(function () {
//             ul.className = "brand_list clearfix";
//             ul.style.marginLeft = 0;
//         }, 500)
//     }
// }
// // setInterval(function () {
// //     moveTo()
// // }, 3000)

// var btnLeft=document.getElementById("btn-left");
// var btnRight=document.getElementById("btn-right");
// //用开关，控制，上次动画没有播放完，下次动画不能开始！
// var canClick=true;
// btnRight.onclick=function(){
//   //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
//   move(1)
// }
// //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
// function move(n){
//   if(canClick){//只有可以单击时
//     moveTo(i+n);//才调用真正移动ul的方法
//     console.log("点击时的"+(i+n));
//     console.log("点击时的"+i);
//     canClick=false;//马上把开关关上，禁止再次点击
//     //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
//     setTimeout(function(){
//       canClick=true;
//     },600);
//   }
// }
// btnLeft.onclick=function(){
//   move(-1);
// }
