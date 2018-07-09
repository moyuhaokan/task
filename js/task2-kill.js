

$(document).ready(function () {
    let {log}=console;
    var key = JSON.parse(localStorage.getItem("Arr"));
    var time = JSON.parse( localStorage.getItem("time"));
    var number = JSON.parse(localStorage.getItem("number"));
    var killclick = JSON.parse(localStorage.getItem("kill"));
    log(killclick)
    let deathNum;
    log(number);
    log(key);
    for (var i =0; i<key.length;i++) {
        add();
    }




    $(".boxx").click(function(){
        deathNum = $(this).index();
        log(deathNum);
    });


    var kee = JSON.parse(localStorage.getItem("kkk"));
    log(kee)
    let num=1;
    let nun;
    for (let i =0; i<key.length;i++) {
        let nun= num++;
    }
    function add() {
        $('.main-float').append(
            `<div class="boxx">
             <div class="box">
            <div class="people">${key[i]}</div>
           <div class="nember">${i+1}号</div>
            </div>
        </div>`)
    };
    (function sss() {
        $(".people").click(function() {
            $(".people").removeClass("red");
            $(this).addClass("red");
            judge =true;
        });
    })();
    let addclass= JSON.parse(localStorage.getItem("deathindex"));
    log(addclass);

    var judge = false;
//
    localStorage

    if (addclass != null) {
        for (var i = 0;i<addclass.length;i++) {
            let numb = addclass[i];//这是我当初存额死亡人数的下标。
            $('.people').eq(numb).addClass("deadcolor");
            $('.people').eq(numb).unbind();
            $(".boxx").eq(numb).unbind();
            //这里让他不能获取下标。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
            // $(".boxx").unbind();
        }
    }


    if (killclick == 0) {
        $("header div").text("杀手杀人页面");
        $(".bottom-vote a").text("杀手悄悄地杀人");
        var kll;
        for(let c = key.length -1; c >= 0 ; c--){
            if(key[c] == "杀手"){
                var kll = c;
                log(kll)
                $('.people').eq(kll).unbind();
                $(".boxx").eq(kll).unbind();
            }
        }
        for (t=0;t<kll.length;t++) {
            log(kll)
        }



    }


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
            log('numss',numss)
            if (killclick != 0) {

                time =time+1;
                localStorage.setItem('time', JSON.stringify(time));

            }


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


