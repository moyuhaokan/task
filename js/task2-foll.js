$(document).ready(function(){
    let {log}=console;
    var key = JSON.parse( localStorage.getItem("Arr"));
    var dead = JSON.parse( localStorage.getItem("deathindex"));
    var time = JSON.parse( localStorage.getItem("time"));
    //点击投票杀人的时候，存一个数字，判断这个数字存在的话，证明已经可以显示；已经死亡玩家的身份了。刚刚进入页面的时候不显示。
    let clickState1 =  localStorage.getItem("state");
    if (clickState1 == 2 ) {
        //这些t,p,u使用来判断该显示身份的，然后就随便写了。
        var t= 0;
        var p= 1;
        var u = 0;
        for (let y =0;y<time-1;y++) {
            t=t+1;
            //下面一个自执行函数，根据天数来循环生成死亡玩家。
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
            //下面的也是一样，显示人s身份下标的，因为一天有白天和夜晚，所以执行完成后，每个都加二，然后就可以循环生成了。
            u=u+2;
            p=p+2;
        }
    }
    //设置一下，这些都都不能点击了。不然的话就怕跟有限状态机冲突。
    $(".coo").unbind();
    //设置一下点击，以前死亡的玩家显示出来，默认关闭。
    $(".day2").click(function(){
        $(".boxs").toggle();
    });
    $(".boxs").hide();

    //顶部页面的两个图片给他一个点确认事件。
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
    //自执行函数，生成有限状态机，安装顺序来杀人。
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
        //有限状态机。
    var fsm = new StateMachine({
        init: 'live',
        transitions: [
            { name: 'murder',     from: 'live',  to: 'kill' },
            { name: 'speech',     from: 'kill',  to: 'undead' },
            { name: 'players',     from: 'undead',  to: 'tall' },
            { name: 'vote',     from: 'tall',  to: 'live' },
        ],
        //进入各个状态的时候颜色变一下，谢谢。
        methods: {
            onMurder: function () {
                $(".kill").css("background-color", "#C8FFAD");
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
    // 这是用来判断时候已经是杀人页的，然后如果是杀了人，就是把那个死亡玩家的身份给显示出来。
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
    //点击的投票按钮的时候，先是进入状态，然后清除一个临时数据，这个临时数据是用来判断是否是杀人页面的，
    // 已经杀人了，现在就要去投票页面，所以清除掉。再生成一个数据，用来到时先是死亡玩家用的。
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
    //两个底部按钮。
    $(".btn1").click(function () {
        window.location.href =  "task2-licens.html";
    })
    $(".btn2").click(function () {
        alert("别看了。再来一局吧")
    })
});










