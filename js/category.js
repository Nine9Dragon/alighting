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
// var goTop = document.querySelector(".icon-gotop")
// window.onscroll = function () {
//   var aa = document.body.scrollTop || document.documentElement.scrollTop;
//   if (aa > 10) {
//     goTop.style.display = "block"
//   } else {
//     goTop.style.display = "none"
//   }
// }
// goTop.onclick = function () {
//   window.scrollTo(0, 0);
// }