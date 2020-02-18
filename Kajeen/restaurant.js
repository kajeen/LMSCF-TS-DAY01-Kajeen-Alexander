var nameOfDish = ["apple", "bread", "cheese", "fish", "ham", "orange"];
for (var _i = 0, nameOfDish_1 = nameOfDish; _i < nameOfDish_1.length; _i++) {
    var value = nameOfDish_1[_i];
    console.log(value);
    $("ul").append("<li><a href=\"" + value + "\"><p>" + value + "</p></a></li>");
}
;
// const [a,b,c,d,e,f] = nameOfDish;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
