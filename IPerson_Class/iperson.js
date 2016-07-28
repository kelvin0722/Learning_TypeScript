var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(dob) {
        var d = new Date(dob);
        this.date_of_birth = d;
    }
    Person.prototype.getDateOfBirth = function () {
        return this.date_of_birth;
    };
    Person.prototype.display_date = function () {
        console.log(this.date_of_birth);
    };
    return Person;
}());
var Infact = (function (_super) {
    __extends(Infact, _super);
    function Infact() {
        _super.apply(this, arguments);
    }
    Infact.prototype.getPersonCategory = function () {
        return "infant";
    };
    Infact.prototype.canSignContract = function () {
        return false;
    };
    return Infact;
}(Person));
var kelvin = new Infact("12 March 1995");
kelvin.display_date();
//# sourceMappingURL=iperson.js.map