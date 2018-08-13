$("#toTOP").click(function() {
    $('body,html').animate({
            scrollTop: 0
        },
        500);
});//返回顶部


$("#viewTop").click(function(){
    $("#nav--small_button").removeAttr("checked");
});//点击任意地方收回选项


$("#toTOP").click(function() {
    $('body,html').animate({
            scrollTop: 0
        },
        500);
});//返回顶部


function init() {
    $("#myCarousel").carousel('cycle');
}
setTimeout(init,400);//可以成功初始化

sessionStorage.clear();//清除存储数据
function goPAGE(){
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        sessionStorage.setItem("equipment", "1");
        console.log("移动端")
    }
    else {
        sessionStorage.setItem("equipment", "2");
        console.log("pc端")
    }
}//判断设备类型
goPAGE();
$("#toGame1").click(function(){
    sessionStorage.setItem("gameNum", "game1");
    location.href = "html/game.html";
});
$("#toGame2").click(function(){
    sessionStorage.setItem("gameNum", "game2");
    location.href = "html/game.html";
});
$("#toGame3").click(function(){
    sessionStorage.setItem("gameNum", "game3");
    location.href = "html/game.html";
});

//使用js实现不同文字长度的段落高度相同
var left = document.getElementById("leftHeight");
var right = document.getElementById("rightHeight");
var leftHeight = left.offsetHeight;
document.getElementById("rightHeight").style.height = leftHeight+'px';
