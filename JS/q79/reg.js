function test(a,b,c){
    if(a.value.length >=b && a.value.length <=c) {
        return true;
    }
    else{
        alert(a.id +"는 "+b+"이상 "+c+"이하로 입력해 주세요.")
    }
}
function reg(){
    var in_id= document.getElementById("reg_id");
    var in_pw= document.getElementById("reg_pw");
    var in_pw2= document.getElementById("reg_pw_2");
    var in_name= document.getElementById("reg_name");
    var in_email= document.getElementById("reg_email");
    var in_birth_y= document.getElementById("reg_birth_year");
    var in_birth_m= document.getElementById("reg_birth_month");
    var in_birth_d= document.getElementById("reg_birth_date");
    var in_gender= document.getElementsByName("reg_gender");
    var in_phone1= document.getElementById("reg_phone_1");
    var in_phone2= document.getElementById("reg_phone_2");
    var in_phone3= document.getElementById("reg_phone_3");


    if (test(in_id,3,12) &&
    test(in_pw,6,12)&&
    test(in_pw2,6,12)&&
    test(in_phone1,3,3)&&
    test(in_phone2,4,4)&&
    test(in_phone3,4,4)){
        alert("성공");
        
    }
}