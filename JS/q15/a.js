window.onload=function() {

var s;
var t = document.getElementById("a");

while(true){
   s= prompt("숫자를 입력해 주세요");
   if (s==100){
      break;
   }
   else {
      t.innerHTML = "100 전에 입력한 값:"+s+"<br>";
   }
}

}