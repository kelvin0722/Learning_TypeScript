var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Employee class
var Employee = (function () {
    //employee construct     
    function Employee(id, fname, lname, salo) {
        this.id = id;
        this.first_name = fname;
        this.last_name = lname;
        this.salary = salo;
    }
    //method to display values
    Employee.prototype.display_values = function () {
        console.log("id:" + this.id);
        console.log("First Name:" + this.first_name);
        console.log("Last Name:" + this.last_name);
        console.log("Salary:" + this.salary);
    };
    return Employee;
}());
var lower_grade = (function (_super) {
    __extends(lower_grade, _super);
    function lower_grade(id, fname, lname, salary, g_rade) {
        _super.call(this, id, fname, lname, salary);
        this.grade = g_rade;
    }
    lower_grade.prototype.display_values = function () {
        console.log("The person's grade is:" + this.grade);
    };
    lower_grade.prototype.identity = function (arg) {
        return arg;
    };
    return lower_grade;
}(Employee));
//creating an instance of the employee class
var employee1 = new Employee(31212, "kelvin", "Mwangi", 4000);
var employee2 = new lower_grade(21313, "Adil", "Mougul", 131312321, "B");
employee1.display_values();
employee2.identity(124);
//# sourceMappingURL=class.js.map