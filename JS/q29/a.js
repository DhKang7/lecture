var myChoice = prompt("가위, 바위, 보");
var comChoice = Math.floor(Math.random()*3)+1; // 1= 가위 2=바위 3=보

function rsp_to_num (x) {
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
function num_to_rsp (x) {
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

function rsp_game (x,y) {
    if(x-y==0) {
        document.write("비겼습니다. player : " + num_to_rsp(x) + " com : " + num_to_rsp(y));
    }
    if(x-y==-1 || x-y==2) {
        document.write("졌습니다. player : " + num_to_rsp(x) + " com : " + num_to_rsp(y));
    }
    if(x-y==1 || x-y==-2) {
        document.write("이겼습니다. player : " + num_to_rsp(x) + " com : " + num_to_rsp(y));
    }
}



rsp_game(rsp_to_num(myChoice),comChoice);



