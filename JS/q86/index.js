//js
// var isOpened = false;

 var btn;
 var pop;

 window.onload = function(){
     btn = document.getElementById("close");
     pop = document.getElementById("popup");
     btn.addEventListener("click",cls);
 }

 function cls(){
    //  if(isOpened == false){
    //      imgCat.style.display = "block";
    //     isOpened = true;
    // } else {
    //     imgCat.style.display = "none";
    //     isOpened = false;
    // }
    pop.style.display="none";
}