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
var img_list = document.querySelector(".img_list");
window.addEventListener("load",function(){
    var title = location.search.split("=")[1]
    console.log(title)
        axios.post("http://127.0.0.1:3000/product/searchDetail",`title=${title}`).then(res=>{
            var data = res.data.data;
            var html =``;
            for(var key of data){
                html +=`
                <li>
                <div class="imgmod_inn">
                        <a class="img220" href="../public/details2.html?did=${key.did}" >
                            <img src="${key.img}">
                        </a>
                    <p class="name">
                        <a href="javascript:;">${key.title}</a>
                    </p>
                    <div class="img-list-text">
                        <p class="mb10">
                            <span class="left">
                                <strong class="price">¥${key.price.toFixed(2)}</strong>/个
                            </span>
                            <label class="fright">
                                <input type="checkbox">对比
                            </label>
                        </p>
                        `
                        
                            var property = JSON.parse(key.property)
                            for(var item in property){
                                html+=`
                                <p>${item}：	${property[item]}</p>
                                `
                            }
                        
                        html+=`
                    </div>
                    <div class="img-list-text h140">
                        <p class="mb10">
                            <strong>
                                <a href="javascript:;">
                                ${key.company}
                                </a>
                            </strong>
                        </p>
                        <p class="mb10 caaa">${key.company}</p>
                        <p class="blue">专属交易员：</p>
                        <p class="blue f14">${key.linkman} ${key.phone}</p>
                        <a class="addCart" href="javascript:;">加入购物车</a>
                    </div>
                </div>
            </li>
                `
            }
            img_list.innerHTML=html;
        }).catch(err=>{
        console.log(err);
        })
    
})

var more = document.getElementById("lookMore");
var div = document.querySelector(".class_dl")
more.addEventListener("click",function(){
    var span = more.getElementsByTagName("span")[0];
    var i = more.getElementsByTagName("i")[0];
    if(span.innerHTML == "展开更多"){
        div.style.height="auto";
        span.innerHTML = "收起";
        i.style.backgroundPosition="0 -701px";
    }else{
        div.style.height="280px";
        span.innerHTML = "展开更多";
        i.style.backgroundPosition="0 -668px";
    }
})


