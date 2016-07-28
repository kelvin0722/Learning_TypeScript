
interface IPerson
{
    getPersonCategory():string,
    canSignContract():boolean,
    getDateOfBirth():Date
}

class Person
{

    private date_of_birth:Date;

    constructor(dob:string)
{
    var d=new Date(dob);
    this.date_of_birth=d;
}

public getDateOfBirth():Date

{ 
     return this.date_of_birth;
}
public display_date():void{

    console.log(this.date_of_birth);
}

}

class Infact extends Person implements IPerson
{
getPersonCategory():string{
    return "infant";
}

canSignContract():boolean{

    return false
}

}



var kelvin:Infact=new Infact("12 March 1995");

kelvin.display_date();