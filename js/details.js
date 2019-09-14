var tab1 = document.querySelectorAll(".alt-tabs-content")[0];
var tab2 = document.querySelectorAll(".alt-tabs-content")[1];
var span1 = document.querySelectorAll(".alt_tabs .tab span")[0];
var span2 = document.querySelectorAll(".alt_tabs .tab span")[1];
span1.onclick=function(){
    span1.setAttribute("class","cur");
    span2.setAttribute("class","");
    tab1.style.display="block";
    tab2.style.display="none";
}
span2.onclick=function(){
    span1.setAttribute("class","");
    span2.setAttribute("class","cur");
    tab1.style.display="none";
    tab2.style.display="block";
}

var focus_tabs = document.querySelector(".focus-tabs");
var big_img = document.querySelector(".big_img")
focus_tabs.addEventListener("mouseover",function(e){
    if(e.target.nodeName == "LI"){
        for(var i=0;i< big_img.children.length;i++){
            big_img.children[i].style.display="none"
            if(i==e.target.dataset.imgid){
                big_img.children[i].style.display="block"
            }
        }
    }
})



var navcon_first = document.querySelector(".navcon_first_a");
var pro_class = document.querySelector(".pro-class"); 
navcon_first.addEventListener("mouseenter",function(){
    pro_class.style.display="block"
})
navcon_first.addEventListener("mouseleave",function(e){
    if(e.relatedTarget.closest(".pro-class"))return
    pro_class.style.display="none"
})
pro_class.addEventListener("mouseleave",function(){
    pro_class.style.display="none"
})



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