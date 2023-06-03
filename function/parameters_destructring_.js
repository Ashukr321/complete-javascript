// parameters destructuring in the js 
// create the function 
const person = ({name , age})=>{
    console.log(name);
    console.log(age);
}

//create the objects 
const obj = {
    name: 'John',
    age: 30,
    job: 'developer'

}

// here we call the function person 
// pass the object as a paremters in the function 

person(obj);