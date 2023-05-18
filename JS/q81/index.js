var id_str = "abc";
var pw_str = "123";

var inp_id;
var inp_pw;
var id_form;
var cl;

var now = new Date();
//document.write(now.getFullYear()+"년 "+(now.getMonth()+1)+"월 "+now.getDate()+"일 "+now.getHours()+"시 "+now.getMinutes()+"분 "+now.getSeconds()+"초 "+now.getMilliseconds()+"밀리초");
window.onload = function(){
    inp_id = document.getElementById("id")
    inp_pw = document.getElementById("pw")
    id_form = document.getElementById("login_form")
    cl = document.getElementById("clock")
    cl.innerHTML=now.getFullYear()+'년 '+(now.getMonth()+1)+'월 '+now.getDate()+'일 '+now.getHours()+'시 '+now.getMinutes()+'분 '+now.getSeconds()+'초 '+now.getMilliseconds()+'밀리초'
    //id_str = inp_id.value;
    //pw_str = inp_pw.value;
}

function idCheck() {
    var tp_id = inp_id.value;
    var tp_pw = inp_pw.value;
    if(tp_id==id_str && tp_pw==pw_str){
        id_form.innerHTML = id_str + "회원님 반갑습니다."
       // alert("로그인 성공");
    }
    if(tp_id!=id_str || tp_pw!=pw_str){
        alert("로그인 실패");
    }

   // alert("id는 " + tp_id +" pw는 "+tp_pw);
}