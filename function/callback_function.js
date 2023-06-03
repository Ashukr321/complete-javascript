// here we see the callback function in the js 
// how it work we can see  

// callback means 
// koi bhi function as a input liya and call that function 
// a function pass to another function as a argument or parameters 
// call that function 


// const func1 = (a)=>{
//     if(a%2==0){
//         console.log("even number ");
//     }else{
//         console.log("odd number ");
//     }
// }

//create the another  function 
// const func2 = (func1)=>{
//     func1(12);
// }
// func2(func1);

// creat greeting 
const greeting = (name)=>{
    alert(`hello ${name} welcome `)
}


const processUserInput = (callback)=>{
    const name = prompt("enter your name ");
    callback(name);
}
processUserInput(greeting);
