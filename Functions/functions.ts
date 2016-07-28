
//function declaration syntax

function area(width:number,length:number) {

    var area=width*length;

    console.log(area);
    
}

//phat arrow expression
var boo=(x:number)=>{

    x+10;

}

//overloading functions

function sum(a: number,b: number):number;
function sum(a: string,b: number):number;
function sum(a: string,b: string):number;

function sum(a,b){

    if(typeof a ==="string"){
        a=parseInt(a,10);
    }
    if (typeof b ==="string"){
        b=parseInt(b,10);
    }
    return a+b;
}

sum(1,2);
sum("1",2);
sum("1","2");


