// optional chaining in the js 

// this is the most imporant topic in the js 

// this is the another  ways of accessing the properties of the object 
// object value is access by the optional chaining 
// ?.  
// if the that key properties is not present then it will gives the undefined value 

//example 
const user = {
    name :"Ashutosh ",
    age :19,
    address:{
        vill:"balua",
        post:"pakwaliya",
        state:"bihar",
    }
}

// console.log(user?.address.state);
// console.log(user?.x);//  


//create a array of object 
const person =[
    {name:"ashutosh",role:"developer"},
    {name:"ankit",role:"designer"},
    {name:"rahul",role:"coder"},
    {name:"anuj",role:"tester"},
]

// console.log(person[2]?.role);
for(let x in person){
    console.log(person[x]?.role);
}