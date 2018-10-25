app.filter('type',function () {
    return function (x) {
        let type= ['首页','找职业','找精英','行业大图'];
        return type[x];
    }
});
app.filter('status',function () {
    return function (x) {
        let status = ['yyy','上线','草稿'];
        return status[x];
    }
});
app.filter('statuss',function () {
    return function (x) {
        let statuss = ['yyy','下线','上线'];
        return statuss[x];
    }
});