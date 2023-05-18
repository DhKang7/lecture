function roll(){
    var a = Math.floor(Math.random()*45)+1;
    return a;
}



var p1, p2, p3, p4, p5, p6;
var r1, r2, r3, r4, r5, r6;
var numbCorr = 0;

p1 = 1;
p2 = 5;
p3 = 10;
p4 = 15;
p5 = 20;
p6 = 25;

r1 = Math.floor(Math.random()*45)+1;
r2 = Math.floor(Math.random()*45)+1;
r3 = Math.floor(Math.random()*45)+1;
r4 = Math.floor(Math.random()*45)+1;
r5 = Math.floor(Math.random()*45)+1;
r6 = Math.floor(Math.random()*45)+1;

while(r2 == r1){
    r2 = Math.floor(Math.random()*45)+1;
}

document.write(r1 + "<br>" +r2 + "<br>" +r3 + "<br>" +r4 + "<br>" +r5 + "<br>" +r6 + "<br>");

function check(x){
    if(x==p1)   {
        numbCorr = numbCorr +1;
    }
    if(x==p2)   {
        numbCorr = numbCorr +1;
    }
    if(x==p3)   {
        numbCorr = numbCorr +1;
    }
    if(x==p4)   {
        numbCorr = numbCorr +1;
    }
    if(x==p5)   {
        numbCorr = numbCorr +1;
    }
    if(x==p6)   {
        numbCorr = numbCorr +1;
    }
}

check(r1);
check(r2);
check(r3);
check(r4);
check(r5);
check(r6);

document.write(numbCorr +"개 맞췄습니다.");