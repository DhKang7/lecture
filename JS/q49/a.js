function Cat (name, age, weight, family, color) {
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.family=family;
    this.color=color;
    this.crying = function (){
        document.write("meow")
    }
}

var meow = new Cat("meow", 2, 5, "KoreanShort", "Brown");

var kitty = new Cat("야옹이", 1, 10, "Norwegian forest", "Brown and white");

document.write(kitty.name+ kitty.age+ kitty.weight+ kitty.family+ kitty.color + "<br>");

var compareAge = meow.age - kitty.age;
if (compareAge>0){
    document.write(meow.name+"가 "+kitty.name+"보다 "+compareAge+"살 더 많다.");
}
else if(compareAge=0){
    document.write(meow.name+"와 "+kitty.name+"는 친구다.");
}

else if (compareAge<0){
    document.write(kitty.name+"가 "+meow.name+"보다 "+Math.abs(compareAge)+"살 더 많다.");
}
else {
    document.write("뭔가 잘못됨")
}

meow.crying();
kitty.crying();
