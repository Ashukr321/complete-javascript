// object in the js 
// this is also similar to the array 
// this is also a reference type of the data 

// it's type is object ; 
// inside array we can store the object

// object don't have index so we can't access  by the  index
// object store the data in the key value pairs data 

// lets see the example of the object 
let person = {
    name :"ashutosh",
    age : 20,
    city : "Delhi"
    
}


// internaly name is just see like "name"


// here we try to access the value of object by the help of the 
// key of the object person 
var em= "ashutoshranjankumar55555@gmail.com";
console.log(person.name);
console.log(person.age);
console.log(person.city);

// how to add new key value  int the object 
person.gender = "male";
console.log(person.gender);

// bracket notation in the object 
person["email"] = em;
console.log(person["email"]);



// exmample 2 
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// Expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);