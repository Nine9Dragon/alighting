axios.get("http://127.0.0.1:3000/product/details2").then(result=> {
    var json = result.data[0].property;
    var property = JSON.parse(json);
    var html = ``;
    var first = document.getElementById("first");
    console.log(result.data[0])
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
            <span>${result.data[0].price.toFixed(2)}</span>
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
                <input type="button" value="立即询价">
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
    var sm = JSON.parse(result.data[0].sm)
    for(var key in sm){
        html+=`
        <li data-bsrc="">
            <img src="${sm[key]}"  alt="">
        </li>
        `
    }
    imgSm.innerHTML = html;
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