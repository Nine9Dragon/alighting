var goTop = document.querySelector(".icon-gotop")
window.onscroll=function(){
    var aa = document.body.scrollTop||document.documentElement.scrollTop;
    if(aa>10){
        goTop.style.display="block"
    }else{
        goTop.style.display="none"
    }
}
goTop.onclick=function(){
    window.scrollTo(0,0);
}