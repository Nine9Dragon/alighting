window.onscroll = function () {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var fixnav = document.querySelector(".fixnav");
    if (top > 545) {
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
    if (top > 4840) {
        for (var key of list) {
            key.className = ""
        }
        list[6].className = "cur"
    }
}