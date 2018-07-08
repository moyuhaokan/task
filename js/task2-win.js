


$(document).ready(function () {
    let sha =1;
    //到时改下这个数据即可。。

        if (sha === 0) {
            $(".win span").text("平民胜利");
        }
        else {
            $(".win span").text("杀手胜利");
        }

    day();
    remainweat();
    remainkill();

})

function day() {
    $(".main-time span").first().text("dsf")
}
function remainkill() {
    $(".remain span").first().text("dsfewr")
}
function remainweat() {
    $(".main-time span").last().text("sdf")
}