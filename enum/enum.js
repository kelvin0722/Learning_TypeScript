//using an enum data type
var Door_state;
(function (Door_state) {
    Door_state[Door_state["closed"] = 0] = "closed";
    Door_state[Door_state["open"] = 1] = "open";
    Door_state[Door_state["Ajar"] = 2] = "Ajar";
})(Door_state || (Door_state = {}));
var door = Door_state[0];
console.log("The door is:" + door.toString());
//arguments variable
//creating a function that accepts arguments of any type
function testParams() {
    var argAguments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argAguments[_i - 0] = arguments[_i];
    }
    if (argAguments.length > 0) {
        var i; //variable for looping
        for (i = 0; i < argAguments.length; i++) {
            console.log("The Parameters are " + i + ":" + argAguments[i]);
        }
    }
}
testParams(1, 2, 3, 4, 4);
testParams("kelvin", "Mwangi", "Ngacha");
//# sourceMappingURL=enum.js.map