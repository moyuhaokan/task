

$(document).ready(function () {
    let {log}=console;
    //先是获取一大堆数值，然后打印出来查看。
    var key = JSON.parse(localStorage.getItem("Arr"));
    var time = JSON.parse( localStorage.getItem("time"));
    var number = JSON.parse(localStorage.getItem("number"));
    var killclick = JSON.parse(localStorage.getItem("kill"));
    var kee = JSON.parse(localStorage.getItem("kkk"));
    let addclass= JSON.parse(localStorage.getItem("deathindex"));
    //首先生成页面需要的盒子才能操作。
    for (var i =0; i<key.length;i++) {
        (function () {
            $('.main-float').append(
                `<div class="boxx">
             <div class="box">
            <div class="people">${key[i]}</div>
           <div class="nember">${i+1}号</div>
            </div>
        </div>`)
        }());
    }
    //生成一个一个变量，然后是点击的时候获取到当前点击盒子的标，后面需要用来标记思维。
    let deathNum;
    $(".boxx").click(function(){
        deathNum = $(this).index();
    });
    //自执行函数，点击杀人的时候先清理一遍原本上色的，然后再给当前盒子变颜色，表示已经选择人数了。
    //声明要给变量等于假的，然后点击选择人数之后才能变成真的，不然的话下面会弹出框，让杀人。
    let judge = false;
    (function sss() {
        $(".people").click(function() {
            $(".people").removeClass("red");
            $(this).addClass("red");
            judge =true;
        });
    })();
    //判断一下如果这个死亡人数是空的话就不执行。
    if (addclass != null) {
        for (var i = 0;i<addclass.length;i++) {
            let numb = addclass[i];
            // 循环一遍，然后把死亡的下标提取出来，上颜色，然后不能点击。
            $('.people').eq(numb).addClass("deadcolor");
            $(".people").eq(numb).unbind();
            $(".boxx").eq(numb).unbind();
        }
    }

    //判断一下，在点击杀手杀人的时候存的东西，判断一下，然后如果有的haul，就是杀手杀人页面。
    if (killclick == 0) {
        //改下页面文字，提醒一下，这是杀手杀人页面。
        $("header div").text("杀手杀人页面");
        $(".bottom-vote a").text("杀手悄悄地杀人");
        var kll;
        for(let c = key.length -1; c >= 0 ; c--){
            if(key[c] == "杀手"){
                var kll = c;
                log(kll)
                $(".people").eq(kll).unbind();
                $(".boxx").eq(kll).unbind();
            }
        }
    }
    //声明两个变量，到时用来判断活着的剩下人数。
    let numss=0;
    let nums=0;
    $(".bottom-vote").click(function () {
        if(judge == false) {
            alert("杀个人再走，好吗吗？")
        }
        else {

            kee[deathNum] = "死亡";
            log(kee);
            number.push(deathNum);
            log(number);
            localStorage.setItem('kkk', JSON.stringify(kee));
            localStorage.setItem('deathindex', JSON.stringify(number));
            localStorage.setItem('number', JSON.stringify(number));
            localStorage.removeItem('kill');
            log('numss',numss);
            //提醒一下，这是在非杀手页面的时候，点击天数加1，然后重新存入数组。
            if (killclick != 0) {
                time =time+1;
                localStorage.setItem('time', JSON.stringify(time));
            }
            //for循环遍历一下剩下杀手，和平门的人数，
            for(let s = kee.length -1; s >= 0 ; s--){
                if(kee[s] == "平民"){
                    numss +=1
                }
            }
            for(let w = kee.length -1; w >= 0 ;w--){
                if(kee[w] == "杀手"){
                    nums +=1
                }
            }
            //判断一下剩下的杀手和平民人数，如果符合条件跳转页面存一下剩余的人，到时显示页面用，不然的话继续杀人，等到死亡人在说、
            if (nums == 0|| nums ==numss) {
                sessionStorage.setItem('Kill', JSON.stringify(nums));
                sessionStorage.setItem('lastwate', JSON.stringify(numss));
                window.location.href =  "task2-win.html";
            }
            else {
                window.location.href =  "task2-foll.html";
            }
        }
    });
});