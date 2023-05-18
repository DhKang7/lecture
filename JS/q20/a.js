for(a=1; a<=10; a++) {
   for(b=1; b<=a; b++) {
      document.write("&nbsp;&nbsp;&nbsp;");
   }
   for(c=1; c<=11-a; c++) {
      document.write("☆");
   }
   document.write("<br>")
}