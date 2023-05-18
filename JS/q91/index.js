var sec = prompt("몇초?");
var scr;
function timer(){
    sec = sec-1;
    if(sec<=0){
        scr.innerHTML="끝"
    }
    else{
        scr.innerHTML = sec;
    }
}

window.onload = function(){
    scr = document.getElementById("timer");
    scr.innerHTML = sec;
    setInterval(timer,1000);
}