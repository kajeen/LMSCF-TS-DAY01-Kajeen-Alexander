window.onload = function () {
    for (var i = 1; i <= 10; i++) {
        document.write("<hr>");
        for (var j = 1; j <= 10; j++) {
            result = createTable(i, j);
            document.write(result);
        }
    }
};
function createTable(a, b) {
    var factorOne = a;
    var factorTwo = b;
    var product = a * b;
    var equation = factorOne + " X " + factorTwo + " = " + product + "<br>";
    return equation;
}
;
