var random;
random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

switch (random) {
   case 1 : 
   document.write("<img src=dice1.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   case 2 : 
   document.write("<img src=dice2.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   case 3 : 
   document.write("<img src=dice3.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   case 4 : 
   document.write("<img src=dice4.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   case 5 : 
   document.write("<img src=dice5.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   case 6 : 
   document.write("<img src=dice6.png>")
   document.write("나온 눈의 값은 ", random, "입니다.");
   break;

   default :
      document.write("디폴트입니다.");
      break;

}