function init() {
  showTime();
  day();  
}
init();

function formatTime(v) {
    return v < 10 ? '0' + v : v;
}

function showTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();//获取四位数的年份，比如2020
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var day = myDate.getDay();
    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    // var mFormat = m < 10 ? '0' + m : m;
    // var sFormat = s < 10 ? '0' + s : s;
    var mFormat = formatTime(m);
    var sFormat = formatTime(s);
    var week = "日一二三四五六".charAt(day);//charAt() 从某个字符串取得具体的字符。
    document.getElementsByClassName("time")[0].innerHTML = year + "年" + month + "月" + date + "日" + "星期" + week + h + ":" + mFormat + ":" + sFormat;
    setInterval(showTime, 1000);
}

function day() {
    var myDate = new Date();
    var endtime = new Date("2021,1,1");
    var ltime = Math.ceil((endtime.getTime() - myDate.getTime()) / (24 * 60 * 60 * 1000));
    document.getElementsByClassName("day")[0].innerHTML = "距2021年元旦还有:" + ltime + "天";
}

