//function declaration syntax
function area(width, length) {
    var area = width * length;
    console.log(area);
}
//phat arrow expression
var boo = function (x) {
    x + 10;
};
function sum(a, b) {
    if (typeof a === "string") {
        a = parseInt(a, 10);
    }
    if (typeof b === "string") {
        b = parseInt(b, 10);
    }
    return a + b;
}
sum(1, 2);
sum("1", 2);
sum("1", "2");
//# sourceMappingURL=functions.js.map