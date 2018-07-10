$(document).ready(function () {
    let {log}=console;
    var key = JSON.parse(localStorage.getItem("Arr"));
    log(key)
    //存储时间天数，到时需要用到，不能再后面的页面加，不然会后面声明变量的话每次进入都要刷新，
    var time =1;
    localStorage.setItem('time', JSON.stringify(time));
    var arr3 = [];
    //存储空数组，到时存下标用到，不然会后面声明变量的话每次进入都要刷新，
    localStorage.setItem('number', JSON.stringify(arr3));
    //存储深拷贝数组，用来存放死人的。，不然会后面声明变量的话每次进入都要刷新，
    var arr2 = key.slice(0);
    localStorage.setItem('kkk', JSON.stringify(arr2));
    //生成一个身份显示
    for (var i =0; i<key.length;i++) {
        (function add() {
            $('.main-float').append(
                `<div class="boxx">
             <div class="box">
            <div class="people">${key[i]}</div>
           <div class="nember">${i+1}号</div>
            </div>
        </div>`)
        }());
    }

});




