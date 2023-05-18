var sec = prompt("몇초?");
var scr;
var clk;
var now = new Date;
function timer(){
    sec = sec-1;
    now = new Date;
    clk.innerHTML=now.getFullYear()+'년 '+(now.getMonth()+1)+'월 '+now.getDate()+'일 '+now.getHours()+'시 '+now.getMinutes()+'분 '+now.getSeconds()+'초 '+now.getMilliseconds()+'밀리초'
    if(sec<=0){
        scr.innerHTML="끝"
    }
    else{
        scr.innerHTML = sec;
    }
}
function watch(){
    
}

window.onload = function(){
    scr = document.getElementById("timer");
    clk = document.getElementById("clock");
    scr.innerHTML = sec;
    setInterval(timer,1000);
}