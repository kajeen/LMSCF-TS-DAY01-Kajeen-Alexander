let nameOfDish: Array<string> =["apple", "bread", "cheese","fish","ham","orange"] ;

for (var value of nameOfDish) {
	console.log(value);
	$("ul").append(`<li><a href="${value}"><p>${value}</p></a></li>`);
};


// const [a,b,c,d,e,f] = nameOfDish;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
