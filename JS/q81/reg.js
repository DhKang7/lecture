function test(a, b, c) {
    if (a.value.length >= b && a.value.length <= c) {
        console.log(a.id + "test passed")
        return true;
    }
    else {
        if (b == c) {
            alert(a.id + "는 " + b + "자리 숫자로 입력해 주세요.")
        }
        else {
            alert(a.id + "는 " + b + "이상 " + c + "이하로 입력해 주세요.")
        }
    }
}
function pwTest(a, b) {
    if (a.value == b.value) {
        console.log("passwords are same")
        return true;
    }
    else {
        alert("비밀번호가 서로 다릅니다.")
    }
}

function reg() {
    var in_id = document.getElementById("reg_id");
    var in_pw = document.getElementById("reg_pw");
    var in_pw2 = document.getElementById("reg_pw_2");
    var in_name = document.getElementById("reg_name");
    var in_email = document.getElementById("reg_email");
    var in_birth_y = document.getElementById("reg_birth_year");
    var in_birth_m = document.getElementById("reg_birth_month");
    var in_birth_d = document.getElementById("reg_birth_date");
    var in_gender = document.getElementsByName("reg_gender");
    var in_phone1 = document.getElementById("reg_phone_1");
    var in_phone2 = document.getElementById("reg_phone_2");
    var in_phone3 = document.getElementById("reg_phone_3");

    for (var i = 0; i < in_gender.length; i++) {
        if (in_gender[i].checked == true) {
            in_gender = in_gender[i].value;
        }
    }
    // in_gender.forEach((node) => {
    //     if(node.checked)  {
    //       alert(node.value);
    //       in_gender = node.value;
    //     }
    // })

    if (test(in_id, 3, 12) &&
        test(in_pw, 6, 12) &&
        test(in_pw2, 6, 12) &&
        pwTest(in_pw, in_pw2) &&
        test(in_phone1, 3, 3) &&
        test(in_phone2, 4, 4) &&
        test(in_phone3, 4, 4)) {
        alert(
            "id : " + in_id.value + "\n" +
            "pw : " + in_pw.value + "\n" +
            "pwcheck: " + in_pw2.value + "\n" +
            "name :" + in_name.value + "\n" +
            "email :" + in_email.value + "\n" +
            "birth :" + in_birth_y.value + in_birth_m.value + in_birth_d.value + "\n" +
            "gender :" + in_gender + "\n" +
            "phone.number :" + in_phone1.value + in_phone2.value + in_phone3.value);
        alert("성공");

    }

}