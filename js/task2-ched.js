$(document).ready(function () {
    // $(".people").unbind();

    // var key = JSON.parse(localStorage.getItem("Arr"));
    // var arr2 = key.slice(0);
    // localStorage.setItem('kkk', JSON.stringify(arr2));
    // for (var i =0; i<key.length;i++) {
    //     add();
    // }
    // let num=1;
    // let nun;
    // for (let i =0; i<key.length;i++) {
    //     let nun= num++;
    // }
    // function add() {
    //     $('.main-float').append(
    //         `<div class="boxx">
    //          <div class="box">
    //         <div class="people">${key[i]}</div>
    //        <div class="nember">${i+1}号</div>
    //         </div>
    //     </div>`)
    // };


    //
    //
    //

    let {log}=console;
    var key = JSON.parse(localStorage.getItem("Arr"));
    log(key)

    var arr3 = [];
    log(arr3);

    localStorage.setItem('number', JSON.stringify(arr3));

    var arr2 = key.slice(0);
    localStorage.setItem('kkk', JSON.stringify(arr2));
    for (var i =0; i<key.length;i++) {
        add();
    }
    // var kee = JSON.parse(localStorage.getItem("kkk"));
    // log(kee)
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




