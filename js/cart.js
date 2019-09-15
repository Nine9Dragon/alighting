axios.defaults.withCredentials = true;
axios.get("http://127.0.0.1:3000/product/searchCart").then(result=>{
    var data = result.data.data;
    // console.log(data)
    var cart_del = document.getElementById("cart_del")
    html = ``;
    if(result.data.code == 0){
        cart_del.innerHTML = `<div class="bruce flex-ct-x">
            <div class="fault-text" data-text="暂无商品">暂无商品</div>
        </div>`
    }else{
        if(result.data.data.length>0){
            for(var key of data){
                // console.log(key)
                html+=`
                <div class="lh30 mBtm10 clearfix">
                    <h4>产品清单</h4>
                </div>
                <div class="cart_cnt clearfix">
                    <div class="cart_cnt_tit">
                        <span class="c999">供应商：</span>
                        <a href="javascript:;">${key.company}</a>
                        <strong class="mLeft20">${key.linkman} ${key.phone}</strong>
                    </div>
                    <table class="table">
                        <thead>
                            <tr validated="0">
                                <th width="450" class="text-left">产品</th>
                                <th width="150">单价（元）</th>
                                <th width="150">数量</th>
                                <th width="100">金额（元）</th>
                                <th width="100">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">
                                    <input type="checkbox" checked value="" class="checkbox_left">
                                    <a href="javascript:;" class="img60">
                                        <img src="${key.img}" alt="">
                                    </a>
                                    <a href="javascript:;" class="pro_title">${key.title}</a>
                                </td>
                                <td>
                                    <span>${key.price.toFixed(2)}</span>
                                </td>
                                <td id="add_td" data-td="${key.cid}">
                                    <i class="icon minus">-</i><input type="text" class="input_text" value="${key.count}"><i class="icon plus">+</i>
                                </td>
                                <td>
                                    <span>${key.price.toFixed(2)}</span>
                                </td>
                                <td>
                                    <a href="javascript:;" data-cid="${key.cid}" class="icon_del"></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="checkbox_all">
                        <label class="mRight20"><input type="checkbox" checked>全选</label>
                        <a href="javascript:;">批量删除</a>
                    </div>
                    <div class="cart_submit_box clearfix" style="padding-left: 700px" att="${key.cid}">
                        <div class="cart_submit_box_pre" >
                            <p>
                                <label>数量 :</label>
                                <b>${key.count}</b>
                            </p>
                            <p>
                                <label>产品总价 :</label>
                                <span class="price">${key.price.toFixed(2)}</span>元
                            </p>
                            <p class="mTop10">
                                <label>支付总金额 :</label>
                                <b class="cf60 f16" price="${key.price}">${key.price.toFixed(2)}</b>
                                <span class="cf60">元</span>
                            </p>
                        </div>
                        <div class="cart_submit_box_btn">
                            <a href="javascript:;">继续采购>>></a>
                            <a href="javascript:;" class="mTop10 blue_btn">去结算</a>
                        </div>
                    </div>
                </div>
                `
            }
                cart_del.innerHTML = html;
                // console.log(result.data)
                console.log(cart_del)
                var aaa = document.querySelectorAll(".icon_del");
                for(var key of aaa){
                    key.addEventListener("click",function(e){
                        var cid = e.target.dataset.cid;
                        console.log(cid);
                        var data = {cid}
                        axios.get("http://127.0.0.1:3000/product/del",{  //params参数必写 , 如果没有参数传{}也可以
                            params:data
                        }).then(result=>{
                            console.log(result);
                        }).catch(err=>{
                            console.log(err);
                        })
                    })
                }
                
                var td = document.querySelectorAll(".cart_cnt");
               
                for(var key of td){
                    key.addEventListener("click",function(e){
                        var inp = document.querySelector(".input_text");
                        var id = e.target.dataset.td;
                        if(e.target.nodeName=="I"){
                            var att = e.target.closest(".table").nextElementSibling.nextElementSibling;
                            var b = att.getElementsByTagName("b");
                            var price = att.getElementsByTagName("span")[0];
                            var count = b[0];
                            var sum = b[1];
                            if(e.target.innerHTML=="-"&&parseInt(e.target.nextElementSibling.value)>1){
                                e.target.nextElementSibling.value = parseInt(e.target.nextElementSibling.value)-1;
                                count.innerHTML = e.target.nextElementSibling.value;
                                sum.innerHTML = (e.target.nextElementSibling.value*sum.getAttribute("price")).toFixed(2)
                                price.innerHTML = sum.innerHTML
                            }else if(e.target.innerHTML=="+"){
                                e.target.previousElementSibling.value = parseInt(e.target.previousElementSibling.value)+1;
                                count.innerHTML = e.target.previousElementSibling.value;
                                sum.innerHTML = (e.target.previousElementSibling.value*sum.getAttribute("price")).toFixed(2)
                                price.innerHTML = sum.innerHTML
                            }
                           
                        }
                    })
                }
        }else{
            cart_del.innerHTML = `<div class="bruce flex-ct-x">
                <div class="fault-text" data-text="暂无商品">暂无商品</div>
            </div>`
        }
    }
}).catch(err=>{
    console.log(err);
})