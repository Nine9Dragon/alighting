$(".input-keyword").mouseover(function () {
    $(".near-hot-search").addClass("input-keyword-on");
})
$(".near-hot-search").mouseout(function (){
    $(this).removeClass("input-keyword-on");
})
