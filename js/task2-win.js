
    let {log}=console;
    let kill = JSON.parse(sessionStorage.getItem("Kill"));
    let wate =JSON.parse(sessionStorage.getItem("lastwate"));
    // let time = JSON.parse( localStorage.getItem("time"));
    let dead = JSON.parse( localStorage.getItem("deathindex"));
    let key = JSON.parse(localStorage.getItem("Arr"));
    var deadlength= dead.length;
    var days =deadlength/2;
    let time = Math.ceil(days);
(function () {
    if (wate == 0) {
        $(".win span").text("平民胜利");
    }
    else {
        $(".win span").text("杀手胜利");
    }

} ());
    $(".remain-number").text(kill);
    $(".remain p span").last().text(wate);
    
    $(".day-time").text(time);
let t=0;
$(".btn1").click(function () {
    window.location.href =  "task2.html";
})
    $(".btn2").click(function () {
       alert("别看了。再来一局吧")
    })
var kk = dead[dead.length-1]

$(".dead .dead-id").text(key[kk]);
$(".dead .dead-number").text(kk+1);
var p=1;
var u =0;
for (let y =0;y<time;y++) {
        t=t+1;
    (function () {
        $('.date').append(
            `
            <div class="frist">第${t}天</div>
        <div class="day">晚上：<span>${dead[u]+1}</span>号被杀手杀死，<span>${dead[u]+1}</span>号是<span>${key[dead[u]]}</span></div>
        <div class="day hide">白天：<span>${dead[p]+1}</span>号被全民投票投死，<span>${dead[p]+1}</span>号是<span>${key[dead[p]]}</span></div>
    
    
`)
    } ());

    u=u+2;
    p=p+2;
}

//


    if( deadlength % 2 !=0) {
    $(".hide").last().hide();
    }
//我需要给这里的写上天数使之每次都加一，然后是吧身份显示出来。

    // 第一个是死亡人数的下标已经有了。dead，然后身份数字也有了。
    //
    // 现在需要的是给死亡的人每次都给加上1，让他循环。
    // dead[0]
    // dead[1]