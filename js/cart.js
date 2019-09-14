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
            <table>
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
                        <td>
                            <i class="icon minus">-</i><input type="text" class="input_text" value="${key.count}"><i class="icon plus">+</i>
                        </td>
                        <td>
                            <span>${key.price.toFixed(2)}</span>
                        </td>
                        <td>
                            <a href="javascript:;" class="icon_del"></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="checkbox_all">
                <label class="mRight20"><input type="checkbox" checked>全选</label>
                <a href="javascript:;">批量删除</a>
            </div>
            <div class="cart_submit_box clearfix" style="padding-left: 700px">
                <div class="cart_submit_box_pre">
                    <p>
                        <label>数量 :</label>
                        <b>${key.count}</b>
                    </p>
                    <p>
                        <label>产品总价 :</label>
                        <span>${key.price.toFixed(2)}元</span>
                    </p>
                    <p class="mTop10">
                        <label>支付总金额 :</label>
                        <b class="cf60 f16">${key.price.toFixed(2)}</b>
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
            cart_del.innerHTML = html;
            console.log(result.data)
        }
    }
}).catch(err=>{
    console.log(err);
})