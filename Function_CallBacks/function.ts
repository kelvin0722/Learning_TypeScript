//type aliases
 type StringBooleanNumber= string | number | boolean;

//showing the use union types
function add_Union(arg1:StringBooleanNumber,arg2:StringBooleanNumber):any
{

 if(typeof arg1 === "string" && typeof arg2 ==="string")
 {

     console.log(arg1);
     console.log(arg1);
 }
 if(typeof arg1 === "number" && typeof arg2 ==="number")
 {

    var sum:number=arg1 + arg2;

    console.log(sum);
 }
 if(typeof arg1 === "boolean" && typeof arg2 ==="boolean")
 {
     
     var boolean_value:boolean=arg1 && arg2;
     console.log(boolean_value);
 }
}

add_Union(1,2);
add_Union(false,true);
add_Union("kelvin","Mwangi");