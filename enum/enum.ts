//using an enum data type
 enum Door_state{
    closed,
    open,
    Ajar
}

var door=Door_state[0];

console.log("The door is:"+door.toString());

//arguments variable
//creating a function that accepts arguments of any type
function testParams(...argAguments:any[])
{
  if(argAguments.length>0){

      var i:number;//variable for looping

      for(i=0;i<argAguments.length;i++)
      {
       
       console.log("The Parameters are "+i+":"+argAguments[i]);
      }
  }
}

testParams(1,2,3,4,4);
testParams("kelvin","Mwangi","Ngacha");
