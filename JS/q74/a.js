var id_str = "abc";
var pw_str = "123";

var inp_id;
var inp_pw;

window.onload = function(){
    inp_id = document.getElementById("id")
    inp_pw = document.getElementById("pw")
    //id_str = inp_id.value;
    //pw_str = inp_pw.value;
}

function idCheck() {
    var tp_id = inp_id.value;
    var tp_pw = inp_pw.value;
    if(tp_id==id_str && tp_pw==pw_str){
        alert("로그인 성공");
    }
    if(tp_id!=id_str || tp_pw!=pw_str){
        alert("로그인 실패");
    }

    alert("id는 " + tp_id +" pw는 "+tp_pw);
}