    let {log}=console;
    let kill = JSON.parse(sessionStorage.getItem("Kill"));
    let wate =JSON.parse(sessionStorage.getItem("lastwate"));
    let dead = JSON.parse( localStorage.getItem("deathindex"));
    let key = JSON.parse(localStorage.getItem("Arr"));
    var deadlength= dead.length;
    var days =deadlength/2;
    let time = Math.ceil(days);
    //判断胜利，判断是杀手赢了还是平民赢了。
    (function () {
        if (kill == 0) {
            $(".win span").text("平民胜利");
        }
        else {
            $(".win span").text("杀手胜利");
        }
    } ());
    //这是显示在网页的剩余人数，使用天数等。
    $(".remain-number").text(kill);
    $(".remain p span").last().text(wate);
    $(".day-time").text(time);
    //这些t,p,u使用来判断该显示身份的，然后就随便写了。
    let t=0;
    let u =0;
    let p =1;
    for (let y =0;y<time;y++) {
        //初始的天数为0，然后没循环一次加1。
            t=t+1;
            //下面一个自执行函数，根据天数来循环生成多少天。
        (function () {
            $('.date').append(
                `
                <div class="frist">第${t}天</div>
            <div class="day">晚上：<span>${dead[u]+1}</span>号被杀手杀死，<span>${dead[u]+1}</span>号是<span>${key[dead[u]]}</span></div>
            <div class="day hide">白天：<span>${dead[p]+1}</span>号被全民投票投死，<span>${dead[p]+1}</span>号是<span>${key[dead[p]]}</span></div>
    `)
        } ());
        //下面的也是一样，显示人s身份下标的，因为一天有白天和夜晚，所以执行完成后，每个都加二，然后就可以循环生成了。
        u=u+2;
        p=p+2;
    }
    //有时候一天之中只有晚上杀了人，如果只有晚上杀人的haul就隐藏掉最后一个。
    if( deadlength % 2 !=0) {
    $(".hide").last().hide();
    }
    //底部两个按钮一个是返回一个是警告
    $(".btn1").click(function () {
        window.location.href =  "task2.html";
    })
    $(".btn2").click(function () {
        alert("别看了。再来一局吧")
    })