// here we see the what is the prototype in the js 
// this is nothing but a simple 
// in js function is a function in addition 
// function provides a additional spaces know as prototype 

// prototype is nothing but a free space  
// empty object  which is provided by the function in the js 


//we can treate a function as a objects 


const person = ()=>{
    console.log("this is person function ");
}

person.hi= "ashutosh kumar";
console.log(person["hi"]);

//  here we store the array inside the function 
person.animal = [2,3,4,4,3];

person.animal.forEach(element => {
    console.log(element);
});


console.log("\n");

console.log(person.animal.length);

//  here we store the a function in the prototype 
person.greet = function(){
    console.log("this is function inside the function prototype");
}


//here we call the fucntion 
person.greet();

// here we try to add a new object inside the function prototype object inside add new object 

person.obj = {
    name : "ashutosh",
    role:"developer",
    
}

// here we try to print the object of prototype of person function 
console.log(person.obj.name);
console.log(typeof  parseInt(person.obj));//number