function roll() {
    var a = Math.floor(Math.random() * 45) + 1;
    return a;
}



// var p1, p2, p3, p4, p5, p6;
// var r1, r2, r3, r4, r5, r6;
var p;
var r;
var numbCorr = 0;

// p1 = 1;
// p2 = 5;
// p3 = 10;
// p4 = 15;
// p5 = 20;
// p6 = 25;

// r1 = Math.floor(Math.random() * 45) + 1;
// r2 = Math.floor(Math.random() * 45) + 1;
// r3 = Math.floor(Math.random() * 45) + 1;
// r4 = Math.floor(Math.random() * 45) + 1;
// r5 = Math.floor(Math.random() * 45) + 1;
// r6 = Math.floor(Math.random() * 45) + 1;

p=[1, 5, 10, 15, 20, 25];
r=[roll(), roll(), roll(), roll(), roll(), roll()];

while (r[1] == r[0]) {
    r[1] = Math.floor(Math.random() * 45) + 1;
}
while (r[2] == r[1] || r[2] == r[0]) {
    r[2] = Math.floor(Math.random() * 45) + 1;
}
while (r[3] == r[2] || r[3] == r[1] || r[3] == r[0]) {
    r[3] = Math.floor(Math.random() * 45) + 1;
}
while (r[4] == r[3] || r[4] == r[2] || r[4] == r[1] || r[4] == r[0]) {
    r[4] = Math.floor(Math.random() * 45) + 1;
}
while (r[5] == r[4] || r[5] == r[3] || r[5] == r[2] || r[5] == r[1] || r[5] == r[0]) {
    r[5] = Math.floor(Math.random() * 45) + 1;
}

document.write(r+"<br>");

function check(x) {
    if (x == p[0]) {
        numbCorr = numbCorr + 1;
    }
    if (x == p[1]) {
        numbCorr = numbCorr + 1;
    }
    if (x == p[2]) {
        numbCorr = numbCorr + 1;
    }
    if (x == p[3]) {
        numbCorr = numbCorr + 1;
    }
    if (x == p[4]) {
        numbCorr = numbCorr + 1;
    }
    if (x == p[5]) {
        numbCorr = numbCorr + 1;
    }
}

// check(r[0]);
// check(r[1]);
// check(r[2]);
// check(r[3]);
// check(r[4]);
// check(r[5]);

for (i=0; i<6; i++){
    check(r[i]);
}
document.write(numbCorr + "개 맞췄습니다.");