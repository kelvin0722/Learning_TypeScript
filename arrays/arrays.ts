//interface of attributes of item
interface name_values{
    id:string,
    name:string,
    age:number,
    dateofbirth:string
}

//an array of type string
var names:string[]=['kelvin','mwangi','ngacha','anthony','gitau'];

//an array of type number
var number:number[]=[1,2,3,4,5,6,7,8,10];

//explicit casting
var items=<any>{position:"coporal",id:2113213}

//declaring an array of type any with an interface
var item:name_values=
{
    id:"213213",
    name:"kelvin",
    age:21,
    dateofbirth:"1993"
   
}


for(var i=0;i<names.length;i++)
{
    console.log(names[i]);
}

console.log(item.id);
