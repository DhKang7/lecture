function Cat (name, age, weight, family, color) {
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.family=family;
    this.color=color;
}

var meow = new Cat("meow", 2, 5, "KoreanShort", "Brown");

var kitty = new Cat("야옹이");

document.write(kitty.name);