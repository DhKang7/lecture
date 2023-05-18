function roll(){
    var a = Math.floor(Math.random()*45)+1;
    return a;
}

for (a=1; a<=6; a++) {
    document.write(roll()+"<br>");
}