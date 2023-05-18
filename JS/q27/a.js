var a = prompt("b보다 큰 a는?");
var b = prompt("a보다 작은 b는?");
var c = prompt("d보다 작은 c는?");
var d = prompt("c보다 큰 d는?");
var e = prompt("100이면 true인 e는?");
var f = prompt("100이면 false인 f는?");

var c1 = a>b && c<d;
var c2 = e==100 && f!=100;
if(c1 || c2) {
    document.write("적어도 둘 중 하나는 정답이다 연금술사");
}
else {
    document.write("둘 다 틀렸음");
}


if((a>b && c<d)||(e==100 && f!=100)) {
    document.write("적어도 둘 중 하나는 정답이다 연금술사");
}

else {
    document.write("둘 다 틀렸음");
}