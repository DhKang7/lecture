function rps_to_num(x) {
    if (x == "가위") {
        return 1;
    }
    else if (x == "바위") {
        return 2;
    }
    else if (x = "보") {
        return 3;
    }
}

function num_to_rps(x) {
    if (x == 1) {
        return "가위";
    }
    if (x == 2) {
        return "바위";
    }
    if (x == 3) {
        return "보";
    }
}

var typed;
var myChoice;
var comChoice; // 1= 가위 2=바위 3=보
var rpsResult;

window.onload = function () {
    typed = document.getElementById("input_text");
    rpsResult = document.getElementById("rps_result");
}

function rps_game(x, y) {
    if (x - y == 0) {
        rpsResult.value = ("비겼습니다. \nplayer : " + num_to_rps(x) + "\ncom : " + num_to_rps(y));
    }
    if (x - y == -1 || x - y == 2) {
        rpsResult.value = ("졌습니다. \nplayer : " + num_to_rps(x) + " \ncom : " + num_to_rps(y));
    }
    if (x - y == 1 || x - y == -2) {
        rpsResult.value = ("이겼습니다. \nplayer : " + num_to_rps(x) + " \ncom : " + num_to_rps(y));
    }
}

function rpsButtonClick() {
        //typed != "가위" && typed != "바위" && typed != "보"
        //typed = prompt("가위, 바위, 보");
        myChoice = typed.value;
        comChoice = Math.floor(Math.random() * 3) + 1;
        if (myChoice == "가위" || myChoice == "바위" || myChoice == "보") {
            rps_game(rps_to_num(myChoice), comChoice);
        }
        else {
            alert("가위, 바위, 보 중 하나를 입력 해 주세요.");
        }

    }
