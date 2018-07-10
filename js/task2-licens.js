//滑动条加减
$(".less").click(function(){
    let num = $("#range").val();
    let nn = Number(num)-1;
    if (3<num<17) {
        $("#range").val(nn);
        console.log(num)
        let shuri = $("#digital").val();
        let ss = $("#range").val();
        $("#digital").val(ss);
        chan()
    } else {
        alert("数字不要超过4和18，谢谢");
    }
});
$(".plus").click(function(){
    let num = $("#range").val();
    let nnn = Number(num)+1;
    if (3<num<17) {
        $("#range").val(nnn);
        // nnn = $("#digital").val();
        // shuri  = $("#range").val(nnn);
        console.log(nnn)
        let shuri = $("#digital").val();
        let ss = $("#range").val();
        $("#digital").val(ss);
        chan()
    } else {
        alert("数字不要超过4和18，谢谢");
    }
});
// 这是关联滑动条跟玩家人数的代码

$("#range").change(function(){
    let shuri = $("#digital").val();
    let ss = $("#range").val();
    $("#digital").val(ss);
    chan()
});

$("#digital").change(function(){
    let shuri = $("#digital").val();
    let ss = $("#range").val();
    $("#range").val(shuri);
    chan();
});


//改变玩家人数




function chan() {
    let num = $("#range").val();
    let number =  Number(num);
    if (number<6) {
        $("#kill").text("1");
        let ss =Number(number)-1;
        $("#water").text(ss);
        return 1;
    }
    else if (number<9) {
        $("#kill").text("2");
        let ss =Number(number)-2;
        $("#water").text(ss);
        return 2;
    }
    else if (number<13) {
        $("#kill").text("3");
        let ss =Number(number)-3;
        $("#water").text(ss);
        return 3;
    }
    else if (number<17) {
        $("#kill").text("4");
        let ss =Number(number)-4;
        $("#water").text(ss);
        return 4;
    }
    else{
        $("#kill").text("5");
        let ss =Number(number)-5;
        $("#water").text(ss);
        return 5;
    }
}
//限制输入人数
$("#digital").change(function(){
    change ()
});
function change (){
    let digital = $("#digital").val();
    let digita = $("#digital");
    if (digital>18) {
        alert("玩家不能超过18人")
        digita.val(18);
    }
    else if (digital<4) {
        alert("玩家不能少于4人")
        digita.val(4);
    }
    else {

    }
    return digital;
};
//
console.log (chan())
function renarr() {
    let number = Number($("#digital").val());
    // 先把杀手的人数确定好。
    var kill;
    if (number>5) {
        kill =  Math.ceil(number * 0.25);
    }
    else {
        kill =1;
    }
    console.log(kill);
    // let shui = number - kill;

    //生成一个空数组，然后一个for循环，让循环的值小于杀手的值，然后生成一个杀手的值，
    // 再把杀手的值给push上去。
    var kills = [];
    for (var i = 0; i < kill; i++) {
        var d = "杀手";
        kills.push(d);
    }
    //b后面为水民。
    var wate = [];
    for (var i = kill; i < number; i++) {
        var d = "平民";
        wate.push(d);
    }
    var total = kills.concat(wate);

    //这是一个洗牌算法，直接使用即可。
    Array.prototype.shuffle = function () {
        var input = this;

        for (var i = input.length - 1; i >= 0; i--) {

            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }
    // 最后的时候把想要乱序的数组给执行一项函数就可以。
    return total.shuffle();
}

$(".bottom-vote").click(function(){
    //每次开始游戏都把以前的数据给清除掉，各种身份各种数组，然后再存已经乱序好的身份。
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('Arr', JSON.stringify(renarr()));
});