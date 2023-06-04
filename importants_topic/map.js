//  map in the js 
// this is also  a itrable 

// store data in ordered fassion 
// key value pair me data is sotre 
// duplicate key are not allow  
// this is also a type of object 
const person = new Map();
// map have two method 
//set 
// and get 
// to set method we can set or we can say we can add the new elements in the map 

person.set('name','ashtosh');
person.set('role','developer');
console.log(person.get("role"));

console.log(person.get("name"));
console.log(person.size);
person.clear();
console.log(person);