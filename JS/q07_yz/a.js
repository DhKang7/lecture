var random=Math.floor(Math.random()*100)+1;
for( var i=1;  i <= random;  i=i+1  ) {
    if ( i == 7 ) { //황금고양이 만들기
        document.write("<img id='goldcat' src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5t5JjQocKednOI7g1hVSoI9t8G9yMua2m5g&usqp=CAU width='100px' height='100px'>");
        document.write(i);
        var gold_cat_img = document.getElementById("goldcat");
        gold_cat_img.style.borderColor = "yellow";
        gold_cat_img.style.borderStyle = "solid";
        gold_cat_img.style.borderWidth = "10px";
    } else {
        document.write("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5t5JjQocKednOI7g1hVSoI9t8G9yMua2m5g&usqp=CAU width='100px' height='100px'>");
        document.write(i);
    }
}
