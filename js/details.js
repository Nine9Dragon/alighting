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
var smallImgs = document.querySelector(".focus-tabs");
var bigImg = document.querySelector(".big_img").firstElementChild.firstElementChild;

smallImgs.addEventListener("mouseover",function(e){
    if(e.target.nodeName=="LI"){
       bigImg.setAttribute("src",e.target.dataset.bsrc);
       e.target.style.borderColor="border-color: #2B86D3; "
    }
})
