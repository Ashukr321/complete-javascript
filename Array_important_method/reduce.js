// here we see the reduced methods in the js 

// what is the used of the reduced methods in the js 

// this return  value from the calculating on the preceding elements the final result of running the reducer 

// across all elements of the array is a single value 


// this callback function take two parameters 
// first is accumulator 
// current value 

// const array = [3,5,5,6,7];// 26

// // INTIALLY ACCUMULATOR STORE THE FIRST ELEMENT OF THE ARRAY 

// const sumData = array.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })// here 0 is the initial value parameters 

// console.log(sumData);

// example get max of 
// const getMax= function(a,b){
//     console.log(Math.max(a,b));
// }
// const arr = [ 100,1000];
// arr.reduce(getMax);

// example 3 
const num = [3.4,5,56,6,77,7,8].reduce((accumulator ,currentValue)=>{
    return accumulator+currentValue;
})
console.log(num);
