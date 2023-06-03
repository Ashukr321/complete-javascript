// here we see the default parameters in the js 

//
// const func = function(a , b = 2){
//     console.log(a+b);
// }

//calling the function 
// func(33);
// for(let i = 0; i <10; i++){
//     func(i);
// }


// array as a default parameter
// function append (value  , arr= [3,3,4]){
//     arr.push(value);
//     arr.pop();
//     arr.unshift(value)
//     return arr;
// }

// const data = append(2);

// console.log(data);// [2];


// how many numbers of times we call the function 

const callSomething = (thing = something())=>{
    console.log(thing);
}

let numberOfTimesCalled = 0 ; 
const something = function (){
    numberOfTimesCalled +=1; 
    return numberOfTimesCalled;
}

// callSomething();// 1
// callSomething();// 1

for(let i = 0; i<10; i++){
    callSomething();
}
