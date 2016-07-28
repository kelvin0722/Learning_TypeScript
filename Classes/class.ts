//employee interface
interface IEmployeeType
{
    id:number,
    first_name:string,
    last_name:string,
    salary:number
  
}



//Employee class

class Employee implements IEmployeeType
{

     id:number;
     first_name:string;
     last_name:string;
     salary:number;
//employee construct     
  constructor(id:number,fname:string,lname:string,salo:number)
  {

      this.id=id;
      this.first_name=fname;
      this.last_name=lname;
      this.salary=salo;

  }

  //method to display values
  public display_values():void
  {
      console.log("id:"+this.id);
      console.log("First Name:"+this.first_name);
      console.log("Last Name:"+this.last_name);
      console.log("Salary:"+this.salary);
  }

}

class lower_grade extends Employee
{

   private  grade:string;
 
   
    constructor(id:number,fname:string,lname:string,salary:number,g_rade:string)
    {
        
    super(id,fname,lname,salary);
     this.grade=g_rade;
    }

    public display_values():void{

        console.log("The person's grade is:"+this.grade);

    }
    public identity<T>(arg: T): T {
    return arg;
}



}

//creating an instance of the employee class
var employee1:Employee=new Employee(31212,"kelvin","Mwangi",4000);
var employee2:lower_grade=new lower_grade(21313,"Adil","Mougul",131312321,"B");

employee1.display_values();
employee2.identity(124)