window.onload = function(){
	
	for(let i = 1; i <= 10; i++){
		document.write("<hr>")
		for(let j = 1; j <= 10; j++){
			result = createTable(i, j);
			document.write(result);
		}
	}
}
function createTable(a, b){
	let factorOne = a;
	let factorTwo = b;
	let product = a * b;
	let equation = factorOne + " X " + factorTwo + " = " + product + "<br>";
	return equation;
};