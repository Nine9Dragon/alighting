var did = location.search.split("=")[1];
var data = {did}
axios.get("http://127.0.0.1:3000/product/details2",{params:data}).then(result=> {
    (function (){
        var json = result.data[0].property;
    var property = JSON.parse(json);
    var html = ``;
    var first = document.getElementById("first");
    // console.log(result.data[0])
    html=`
    <div class="store_info_c">
        <div class="info_box">
            <a href="javascript:;">
            ${result.data[0].company}
             </a>
        </div>
        <div class="store_operation">
            <a href="javascript:;">
            进入主页
            </a>
        </div>
    </div>
    <div class="store_contact">
        <b>${result.data[0].linkman}   ${result.data[0].phone}</b>
    </div>
    <div class="store_statistics">
        <span class="store_browse">
        <b>${result.data[0].watch}</b>
        <em>查看次数</em>
        </span>
    </div>
    `
    first.innerHTML = html;
    html=``;
    var li=``;
    var second = document.getElementById("second");
    html+=`
    <div class="view_tit">
        <strong>${result.data[0].title}</strong>
        <label> <input type="checkbox"> 添加对比 </label>
    </div>
    <div>
    <div class="goods_price clearfix">
        <span>价格</span>
        <div>
            <span>¥${result.data[0].price.toFixed(2)}</span>
        </div>
    </div>
    <div class="goods_place">
        <span>发往货仓</span>
        <div>
            <span>广东 广州市</span>
            <a href="javascript:;">
                请选择
            </a>
            <i class="icon_down"></i>
            运费:
            <i style="font-style: normal">0.00</i>元
        </div>
        </div>
        <div class="tab_property_box">
            <ul class="tab_property">
        `
       for(var key in property){
           li+= `
           <li>
               <span class="property_title">${key}：</span>
               <span title="${property[key]}">${property[key]}</span>
           </li>
           `
       }
       html+=li
       html+= ` </ul>
            </div>
            <div class="tab_botton_box">
                <input type="button" value="加入购物车" id="addCart">
                <div class="loan_hint">
                    <span>委托阿拉丁采购，可获得长期稳定货源。拨打
                        <b>020-32615598 </b>
                        <a href="javascript:;" target="_blank">详细了解</a>
                    </span>
                </div>
            </div>
        </div>
        <div class="sample_box">
            <div class="sample_icon">
                立即<br>
                拿样
            </div>
            <dl class="sample_dl">
                <dd>进货先拿样，批发有保障！</dd>
                <dd style="color:#aaa;">申请拿样，二次进货商家可能会优惠让利。</dd>
                <dd>
                    <a href="javascript:;">拿样规则>></a>
                </dd>
            </dl>
            <dl class="sample_dl">
                <dd><span>拿样价</span>	30.00元/个</dd>
                <dd><span>样品说明</span>	拿样支付20天...</dd>
                <dd>
                    <span>运费</span>	与该产品运费一致
                </dd>
            </dl>
            <div class="sample_input">
                <input type="button" value="立即拿样">
            </div>
        </div>
    `
    second.innerHTML=html;
    var third = document.getElementById("third");
    third.innerHTML=li;
    html=``;
    var imgSm = document.getElementById("imgSm")
    var sm = JSON.parse(result.data[0].sm);
    var i= 0;
    for(var key in sm){
        html+=`
        <li data-imgid="${i}">
            <img src="${sm[key]}"  alt="">
        </li>
        `
        i++
    }
    imgSm.innerHTML = html;
    html=``;

    var big_img = document.querySelector(".big_img")
    var lg = JSON.parse(result.data[0].lg)
    for(var key in lg){
        if(key == "lg1"){
            html+=`
            <li>
                <img src="${lg[key]}"  alt="">
            </li>        
            `
        }
        html+=`
        <li style="display:none">
            <img src="${lg[key]}"  alt="">
        </li>
        `
    }
    big_img.innerHTML = html;
    // imgSm.innerHTML = html;
    html=``;
    var inintroduce = document.getElementById("introduce");
    var ins = result.data[0].introduce;
    ins = JSON.parse(ins);
    for(var key in ins){
        html+=`
        <p>
        <img src="${ins[key]}" alt="">
    </p>
   
        `
    }
    html+=` <p>
                <strong style="font-weight: bold">
                    <span style="font-size: 18pt">
                        <br>
                    </span>
                </strong>
            </p>`
    inintroduce.innerHTML=html;
    } )();  
    var addCart = document.getElementById("addCart");
    console.log(addCart)
    addCart.addEventListener("click",function(){
        var data = result.data[0];
        var details_id = data.did;
        var company = data.company;
        var linkman = data.linkman;
        var phone = data.phone;
        var img = JSON.parse(data.sm).sm1;
        var title = data.title;
        var price = data.price;
        var count = 1;
        var data = {
            details_id,
            company,
            linkman,
            phone,
            img,
            title,
            price,
            count
        }
        axios.defaults.withCredentials = true
        axios.get("http://127.0.0.1:3000/product/addCart",{  //params参数必写 , 如果没有参数传{}也可以
            params:data
        }).then(result=>{
            console.log(result);
        }).catch(function(err){
            console.log(err);
        });
    })
  })
  .catch(function (error) {
    console.log(error);
  });


  axios.get("http://127.0.0.1:3000/product/anthor?family=1").then(result=> {
    var similar_details = document.getElementById("similar_details");
    var html =``;
    for(var key of result.data){
        html +=`
        <li>
            <a href="javascript:;">
                <img src="${key.img_src}" alt="">
            </a>
            <p class="goods_name">
                <a href="javascript:;">${key.title}</a>
            </p>
            <p class="goods_price">${key.price}</p>
        </li>
        `
        
    }
    similar_details.innerHTML = html;

}).catch(function (error) {
    console.log(error);
});
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
// var smallImgs = document.querySelector(".focus-tabs");
// var bigImg = document.querySelector(".big_img").firstElementChild.firstElementChild;

// smallImgs.addEventListener("mouseover",function(e){
//     if(e.target.nodeName=="LI"){
//        bigImg.setAttribute("src",e.target.dataset.bsrc);
//        for(var i=0;i<smallImgs.children.length;i++){
//            smallImgs.children[i].className="";
//        }
//        e.target.className="border_blue"
//     }
// })



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
