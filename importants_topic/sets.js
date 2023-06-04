//  here we see the sets in the js 

// what is sets 
// collection of the data but not repeated data 

//collection of unique elements 
// user accont id 
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()

// size	Returns the number elements in a Set



//how  to create the sets in the  js 
// new keywords in used to create the sets 

const data  = new Set();
data.add(23);
data.add(2);
data.add(3);
data.add("this");
// console.log(data);

// sets is also a iterables so we can aply the for loop 
// for(let x of data){
//     console.log(x);
// }



// for each method  on sets 
data.forEach((d)=>{
    console.log(d)
})

console.log(data.has(2));// true
data.clear();
console.log(data);// delate the sets 