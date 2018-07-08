

$(document).ready(function () {
    let {log}=console;
    var key = JSON.parse(localStorage.getItem("Arr"));

    var number = JSON.parse(localStorage.getItem("number"));
    var killclick = JSON.parse(localStorage.getItem("kill"));
    log(killclick)
        // if (killclick == 0)

        // }
        //     for (var a = 0; a<key.length;a++) {

        //     }
    // log(_exist)
    //     for (var _exist = 0; _exist<key.length;_exist++) {
    //         var _exist=$.inArray('杀手',key);
    //
    //     }
    //         if(_exist>=0){
    //             alert('杀手 存在于数组fruit中,其在数组中索引值是: '+_exist);
    //     }

            //这是我当初存额死亡人数的下标。
            //第一步，我要先找出杀手的死亡下标。然后根据这个来不能点击。
            //我需要先遍历一遍原本的数组，然后选出来。
            // if (key[a] == "杀手") {
            //     $('.people').unbind();
            // }
        //
        // }
    //
    // if (killclick == 0) {
    //     for (var i = 0;i<addclass.length;i++) {
    //         let numb = addclass[i];
    //         $('.people').eq(numb).addClass("deadcolor");
    //         $('.people').eq(numb).unbind();
    //     }
    // }

    log(number);
    log(key);
    for (var i =0; i<key.length;i++) {
        add();
    }
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

    if (addclass != null) {
        for (var i = 0;i<addclass.length;i++) {
            let numb = addclass[i];//这是我当初存额死亡人数的下标。
            $('.people').eq(numb).addClass("deadcolor");
            $('.people').eq(numb).unbind();
        }
    }


    if (killclick == 0) {

        var kll;
        for(let c = key.length -1; c >= 0 ; c--){
            if(key[c] == "杀手"){
                var kll = c;
                log(kll)
                $('.people').eq(kll).unbind();
            }
        }
        for (t=0;t<kll.length;t++) {
            log(kll)
        }



    }
    //
    //
    // for(let s = kee.length -1; s >= 0 ; s--){
    //
    //     if(kee[s] == "平民"){
    //         numss +=1
    //     }
    // }
    // log('numss',numss)
    // let nums=0;
    // for(let w = kee.length -1; w >= 0 ;w--){
    //
    //     if(kee[w] == "杀手"){
    //         nums +=1
    //     }
    // }
 let numss=0;
    log('nums',nums);
    let nums=0;
    let deathNum;
    $(".boxx").click(function(){
        deathNum = $(this).index();
        log(deathNum);
    });

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
            if (numss === 1) {
                localStorage.setItem(' lastwate', JSON.stringify(numss));
                localStorage.setItem(' lastkill', JSON.stringify(nums));
                window.location.href =  "task2-win.html";
            }
            else if (nums+numss<2) {
                localStorage.setItem(' lastwate', JSON.stringify(numss));
                localStorage.setItem(' lastkill', JSON.stringify(nums));
                window.location.href =  "task2-win.html";
            }
            else {
                window.location.href =  "task2-foll.html";
            }
        }
    });

   // if (nums == 0 ) {
   //     window.location.href =  "task2-win.html";
   //  }
   //  if (nums+numss<=2) {
   //      window.location.href =  "task2-win.html";
   //  }
       //;nums+numss<=2
//        if杀手等于零的话。平民胜利。
//
// 杀手，if平民加上杀手的数量小于等于2的话，杀手胜利。
});

// sessionStorage.setItem('click', 6);
// let tu =  sessionStorage.getItem("click");
// if (tu == 6 ) {
//     $(".bottom-vote a").text("确定");
//
//
// }

