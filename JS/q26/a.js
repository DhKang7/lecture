var species = prompt("어떤 동물인가?");
var nam = prompt(species+"의 이름은?");

var age = prompt(nam+"의 나이는?");

var details = prompt(nam+"의 종류는?");

function sum(a,b,c,d){
    document.write(a+"의 이름은 "+b+"이고 나이는 "+c+"살 이며 "+ d+"이다.");
}

document.write(species+"의 이름은 "+nam+"이고 나이는 "+age+"살 이며 "+ details+"이다.");

sum(species,nam,age,details);

