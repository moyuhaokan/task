$(document).ready(function () {
    // $(".people").unbind();
    // let {log}=console;
    var key = JSON.parse(localStorage.getItem("Arr"));

    for (var i =0; i<key.length;i++) {
        add();
    }
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
});