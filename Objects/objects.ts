//creating an interface

interface IPerson{
    firstname:string,
    lastname:string,
    sayHi():void; //returns void
}

//objects

var person :IPerson={
    firstname:'kelvin',
    lastname:'Mwangi',
    sayHi:function (){}
}

function doSomethingWith(person:IPerson){

    var full_name=person.firstname+" "+person.lastname;

    console.log(full_name);

}

doSomethingWith(person);

