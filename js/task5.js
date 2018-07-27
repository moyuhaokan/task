//
// $(".btn").click(function(){
//    // let ues = $(".phone").val();
//    // let passworld = $(".lock").val();
//
//     var uers = $(".phone").val();
//     var password = $(".lock").val();
//    //  console.log(form);
//     if(uers == "") {
//         alert("请输入用户名");
//     }
//     else if (password == "") {
//         alert("请输入密码");
//     }
//     else if (password != "" && uers != "") {
//         $.post('/carrots-admin-ajax/a/login',
//             {
//                 name: uers, pwd: password
//             },
//             function (data, status) {
//                 var $data = JSON.parse(data);
//                 console.log($data);
//                 if ($data.message === "success") {
//                     window.location.href = "http://dev.admin.carrots.ptteng.com/";
//                 }
//                 else {
//                     alert($data.message)
//                 }
//             });
//     }
// });



    btn.onclick = function () {
        var btn = document.getElementById("btn");
        var uers = document.getElementById("phone").value;
        var password = document.getElementById("lock").value;
        console.log(password);
        console.log(btn);
    console.log(uers)
    if(uers == "") {
        alert("请输入用户名");
    }
    else if (password == "") {
        alert("请输入密码");
    }
    else if (password != "" && uers != "") {
            var xmlhttp = new XMLHttpRequest();
//定义了一个变量，这个变量是用来在后台与服务器交换数据使用。然后需要配合其他方法。比如，打开，
            xmlhttp.open("Post","/carrots-admin-ajax/a/login",true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // Content-Type内容格式，然后是是设置的值。
            xmlhttp.send("name=" + uers + "&pwd=" + password);
        // 发送的东西，发送密码和账号数据。

            xmlhttp.onreadystatechange = function()//使用原本设置的变量跟后台不断交换数据，
            {
                if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) { //当这个属性改变是，就会调用该函数。当状态码是200的时候，
                        var jsons = JSON.parse(xmlhttp.responseText);//reponsetext通过这个属性祈福会服务器的返回数据。
                        console.log(jsons);
                        if (jsons.code === 0) {
                            window.location.href = "http://dev.admin.carrots.ptteng.com/#/login"
                        } else {
                            alert("账号或密码错误")
                    }
                }
            };
    }
};

