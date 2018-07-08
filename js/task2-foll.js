var key = JSON.parse( localStorage.getItem("Arr"));


//关闭页面可以使用
$("header img").first().click(function(){
    let r = confirm("你想关闭页面，重新开始吗？")
    if ( r === true ) {
    window.location.href =  "task2-licens.html";
    };

});

$("header img").last().click(function(){
    let r = confirm("你想结束游戏，看结果吗？")
    if ( r === true ) {
        window.location.href =  "task2-win.html";
    };
});
//
//
// var fsm = new StateMachine({
//     init: 'live',
//     transitions: [
//         { name: 'murder',     from: 'live',  to: 'kill' },
//         { name: 'speech',     from: 'kill',  to: 'undead' },
//         { name: 'players',     from: 'undead',  to: 'tall' },
//         { name: 'vote',     from: 'tall',  to: 'govote' },
//     ],
//     methods: {
//         onMurder: function () {
//             $(".kill").css("background-color", "#C8FFAD");
//             // window.location.href =  "task2-ched.html";
//         },
//         onSpeech: function () {
//             $(".tall").css("background-color", "#C8FFAD");
//
//         },
//
//         onPlayers: function () {
//             $(".tall2").css("background-color", "#C8FFAD");
//
//         },
//
//         onVote: function () {
//             $(".vote").css("background-color", "#C8FFAD");
//             // window.location.href =  "task2-licens.html";
//         },
//
//     }
// });
// let clickState1 =  sessionStorage.getItem("state3");
// if (clickState1 == 2 ) {
//     fsm.vote();
// }
// let clickState =  sessionStorage.getItem("state2");
// if (clickState == 1 ) {
//     fsm.murder();
// }
//
//
// //添加点击事件
//
//     $(".kill").click(function () {
//         if(fsm._fsm.state=='live'){
//             fsm.murder();
//             window.location.href =  "task2-kill.html";
//             sessionStorage.setItem('state2', 1);
//         }
//         else {
//             alert("请按顺序操作")
//         }
//     });
//
//     $(".tall").click(function () {
//         if(fsm._fsm.state=='kill'){
//             fsm.speech();
//             confirm("死亡的人出来唠唠")
//             window.location.href =  "task2-kill.html";
//         }
//         else {
//             alert("请按顺序操作")
//         }
//     });
//     $(".tall2").click(function () {
//         if(fsm._fsm.state=='undead'){
//             fsm.players();
//             confirm("请玩家发言吧，看谁不顺眼就杀谁")
//             window.location.href =  "task2-kill.html";
//         }
//         else {
//             alert("请按顺序操作")
//         }
//     });
//     $(".vote").click(function () {
//         if(fsm._fsm.state=='tall'){
//             fsm.vote();
//
//             sessionStorage.setItem('state3', 2);
//             window.location.href =  "task2-kill.html";
//
//         }
//         else {
//             alert("请按顺序操作")
//         }
//     });
$(".kill").click(function () {

    localStorage.setItem('kill', JSON.stringify(0));
    window.location.href =  "task2-kill.html";

})
$(".dead").click(function () {
    window.location.href =  "task2-kill.html";
})
$(document).ready(function(){
    function add() {
        $('.main').append(
            `
            <div class="main-order">
        <div class="day">第<span>2</span>天</div>
        <div class="kill"><img src="../jsimages/moom.png" ><span>杀手杀人</span> </div>
        <div class="dead"></div>
        <div class="tall"><img src="../jsimages/sun.png" ><span>亡灵发表遗言</span> </div>
        <div class="tall2">玩家依次发言</div>
        <div class="vote">投票</div>
    </div>
`)
    };
});






















