// here we see the how to iterate the object in the js 
// this is the most important in the js 
// because we use  these all concepts in the reallife porject 
// like cart  and many more ....

// example 1 
//create the object 
const person  = {
    name :"ashutosh ",
    age : 20,
    city :"delhi",
    gender :"male",
    date: new Date()
}

// Using a for...in loop
// this gives the key  
// for(let x in person){
//     console.log(`${x} : ${person[x]}`);
// }

// Object.keys method
// this return the object of key 
// let data = Object.keys(person);
// all key return in string 

// for(let key of data ){
//     // console.log(typeof key );
//     console.log(`${key} : ${person[key]}`);

// }





// Object.values method
// this gives the vlaue of the object 
// this is just revese of the obejct.key fun ction 
// ⭐⭐⭐ this return the array of the value object 


// let val = Object.values(person);
// // console.log(val);
// for(let i = 0; i<val.length; i++){
//     console.log(val[i]);
    
// }

// Object.entries method
// this return the array of array key value  of each entities from object 

const animals = {
    tiger: 1,

    cat: 2,

    monkey: 3,

    elephant: 4
};

// const entries = Object.entries(animals);
// console.log(entries);

// for (const [key, value] of Object.entries(animals)) {
//     console.log(`${key}: ${value}`);
// }

// for each loop  

// Object.entries(animals).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// });


// spread opeartors in the  obejcts 
// copy the all the key value of the objects 
const obj = {...person, ...animals};
console.log(obj);