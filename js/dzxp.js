// 可选地，上面的请求可以这样做
axios.get('http://127.0.0.1:3000/user/snzm').then(result=> {
    var f1 = document.getElementById("floor1");
    var f2 = document.getElementById("floor2");
    var f3 = document.getElementById("floor3");
    var f4 = document.getElementById("floor4");
    var f5 = document.getElementById("floor5");
    var f6 = document.getElementById("floor6");
    var html = ``;
    for(var i=70;i<80;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f1.innerHTML=html;
    html=``;
    for(var i=80;i<90;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f2.innerHTML=html;
    html=``;
    for(var i=90;i<100;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f3.innerHTML=html;
    html=``;
    for(var i=100;i<110;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f4.innerHTML=html;
    html=``;
    for(var i=110;i<120;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f5.innerHTML=html;
    html=``;
    for(var i=120;i<130;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f6.innerHTML=html;
    html=``;
    for(var i=60;i<70;i++){
        var data = result.data[i];
        html+=`
        <li>
            <var>
                <a href="javascript:;">
                    <img src="${data.img_url}" alt="">
                    <samp></samp>
                </a>
                <ins>${data.title}</ins>
                <h4>${data.details}</h4>
                <h5>${data.factory}</h5>
                <p>
                    <a href="javascript:;">查看产品</a>
                </p>
            </var>
        </li>
        `
    }
    f7.innerHTML=html;
  })
  .catch(function (error) {
    console.log(error);
  });


  window.onscroll = function () {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var fixnav = document.querySelector(".fixnav");
    if (top > 520) {
        fixnav.style.display = "block"
    } else {
        fixnav.style.display = "none"

    }
    var div = document.querySelectorAll(".fixnav .nav")[0];
    var list = div.children;
    if (top > 600) {
        for (var key of list) {
            key.className = ""
        }
        list[0].className = "cur"
    }
    if (top > 1330) {
        for (var key of list) {
            key.className = ""
        }
        list[1].className = "cur"
    }
    if (top > 2030) {
        for (var key of list) {
            key.className = ""
        }
        list[2].className = "cur"
    }
    if (top > 2750) {
        for (var key of list) {
            key.className = ""
        }
        list[3].className = "cur"
    }
    if (top > 3450) {
        for (var key of list) {
            key.className = ""
        }
        list[4].className = "cur"
    }
    if (top > 4140) {
        for (var key of list) {
            key.className = ""
        }
        list[5].className = "cur"
    }
    if (top > 4800) {
        for (var key of list) {
            key.className = ""
        }
        list[6].className = "cur"
    }
}