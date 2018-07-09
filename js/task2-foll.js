$(document).ready(function(){
    let {log}=console;
    var key = JSON.parse( localStorage.getItem("Arr"));
    var dead = JSON.parse( localStorage.getItem("deathindex"));
    var time = JSON.parse( localStorage.getItem("time"));
    log(key)
//关闭页面可以使用

    let clickState1 =  localStorage.getItem("state");
    if (clickState1 == 2 ) {

        var t= 0;
        var p= 1;
        var u = 0;
        for (let y =0;y<time-1;y++) {

            t=t+1;
            (function () {
                $('.main').append(
                    `
  <div class="main-order">
        <div class="day day2">第<span>${t}</span>天</div>
        <div class="boxs">
        <div class="kill coo"><img src="../jsimages/moom.png" ><span>杀手杀人</span> </div>
        <div class="dead1 ">昨晚${dead[u]+1}号被杀,真实身份是${key[dead[u]]}</div>
        <div class="tall coo"><img src="../jsimages/sun.png" ><span>亡灵发表遗言</span> </div>
        <div class="tall2 coo">玩家依次发言</div>
        <div class="vote coo">投票</div>
         <div class="dead1 ">昨晚${dead[p]+1}号被杀,真实身份是${key[dead[p]]}</div>
         </div>
    </div>

`)
            } ());

            u=u+2;
            p=p+2;
        }
    }

    $(".day2").click(function(){

        $(".boxs").toggle();
    });
    $(".boxs").hide();
    $(".dead").show();
    $(".dead").show();

    log(key)
    $(".kill").click(function () {
        alert("fdskjlf")
    });
    $("header img").first().click(function(){
        let r = confirm("你想关闭页面，重新开始吗？")
        if ( r === true ) {
            window.location.href =  "task2-licens.html";
        };

    });

    $("header img").last().click(function(){
        let r = confirm("你想关闭页面，重新开始吗？")
        if ( r === true ) {
            window.location.href =  "task2-licens.html";
        };
    });
        (function () {
            $('.main').append(
                `
            <div class="main-order">
        <div class="day">第<span>${time}</span>天</div>
        <div class="boxs1">
        <div class="kill"><img src="../jsimages/moom.png" ><span>杀手杀人</span> </div>
        <div class="dead">昨晚<span class="dead-number">1</span>号被杀,真实身份是<span class="dead-id"></span></div>
        <div class="tall"><img src="../jsimages/sun.png" ><span>亡灵发表遗言</span> </div>
        <div class="tall2">玩家依次发言</div>
        <div class="vote">投票</div>
        </div>
    </div>
    
`)

        } ());

















































    var fsm = new StateMachine({
        init: 'live',
        transitions: [
            { name: 'murder',     from: 'live',  to: 'kill' },
            { name: 'speech',     from: 'kill',  to: 'undead' },
            { name: 'players',     from: 'undead',  to: 'tall' },
            { name: 'vote',     from: 'tall',  to: 'live' },
        ],
        methods: {
            onMurder: function () {
                $(".kill").css("background-color", "#C8FFAD");
                // window.location.href =  "task2-ched.html";
            },
            onSpeech: function () {
                $(".tall").css("background-color", "#C8FFAD");

            },

            onPlayers: function () {
                $(".tall2").css("background-color", "#C8FFAD");

            },

            onVote: function () {
                $(".vote").css("background-color", "#C8FFAD");
            },

        }
    });
    $(".btn1").click(function () {
        window.location.href =  "task2-licens.html";
    })
    $(".btn2").click(function () {
        alert("别看了。再来一局吧")
    })
    // var args=new Array(['www'],['phpernote'],['com']);
    //
    // alert(args[args.length-1]);//com
    $(".dead").hide();
    let  clickState=  sessionStorage.getItem("state2");
    log(clickState)
    if (clickState == 1 ) {
        fsm.murder();
        $(".dead").show();
        var kk = dead[dead.length-1]

        $(".dead .dead-id").text(key[kk]);
        $(".dead .dead-number").text(kk+1);
    }


//添加点击事件

    $(".kill").click(function () {
        if(fsm._fsm.state =='live'){
            fsm.murder();
            sessionStorage.setItem('state2', JSON.stringify(1));
            localStorage.setItem('kill', JSON.stringify(0));
            window.location.href =  "task2-kill.html";
        }
        else {
            alert("请按顺序操作")
        }
    });

    $(".tall").click(function () {
        if(fsm._fsm.state=='kill'){
            fsm.speech();
            confirm("死亡的人出来唠唠")
        }
        else {
            alert("请按顺序操作")
        }
    });
    $(".tall2").click(function () {
        if(fsm._fsm.state=='undead'){
            fsm.players();

            confirm("请玩家发言吧，看谁不顺眼就杀谁")
        }
        else {
            alert("请按顺序操作")
        }
    });
    $(".vote").click(function () {
        if(fsm._fsm.state=='tall'){

            fsm.vote();

            sessionStorage.clear("state2");
            localStorage.setItem('state', JSON.stringify(2));
            window.location.href =  "task2-kill.html";
        }
        else {
            alert("请按顺序操作")
        }
    });
    $(".coo").unbind();
//         $('.main').append(
//             `
//             <div class="main-order">
//         <div class="day">第<span>${time}</span>天</div>
//         <div class="kill"><img src="../jsimages/moom.png" ><span>杀手杀人</span> </div>
//         <div class="dead"></div>
//         <div class="tall"><img src="../jsimages/sun.png" ><span>亡灵发表遗言</span> </div>
//         <div class="tall2">玩家依次发言</div>
//         <div class="vote">投票</div>
//     </div>
// `)


});










