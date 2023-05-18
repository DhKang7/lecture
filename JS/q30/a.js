
function rps_to_num (x) {
    if(x=="가위"){
        return 1;
    }
    else if(x=="바위"){
        return 2;
    }
    else if(x="보"){
        return 3;
    }
}
function num_to_rps (x) {
    if (x==1){
        return "가위";
    }
    if (x==2){
        return "바위";
    }
    if (x==3){
        return "보";
    }
}

var typed;
while(typed != "가위" && typed != "바위" && typed != "보"){
    alert("가위, 바위, 보 중 하나를 입력 해 주세요.");
    typed = prompt("가위, 바위, 보");
}
var myChoice = typed;
var comChoice = Math.floor(Math.random()*3)+1; // 1= 가위 2=바위 3=보


function rps_game (x,y) {
    if(x-y==0) {
        document.write("비겼습니다. player : " + num_to_rps(x) + " com : " + num_to_rps(y));
    }
    if(x-y==-1 || x-y==2) {
        document.write("졌습니다. player : " + num_to_rps(x) + " com : " + num_to_rps(y));
    }
    if(x-y==1 || x-y==-2) {
        document.write("이겼습니다. player : " + num_to_rps(x) + " com : " + num_to_rps(y));
    }
}



rps_game(rps_to_num(myChoice),comChoice);



