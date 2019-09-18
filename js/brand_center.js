var navcon_first = document.querySelector(".navcon_first_a");
var pro_class = document.querySelector(".pro-class"); 
console.log(navcon_first)
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



