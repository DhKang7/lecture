var id_str = "";
var pw_str = "";

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

    alert("id는 " + tp_id +" pw는 "+tp_pw);
}