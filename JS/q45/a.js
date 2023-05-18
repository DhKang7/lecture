function Cat (name, age, weight, family, color) {
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.family=family;
    this.color=color;
    this.crying = function(){document.write("meow");}
}

var meow = new Cat("meow", 2, 5, "KoreanShort", "Brown");

meow.crying();
