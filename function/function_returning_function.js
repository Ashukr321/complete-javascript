// here we see the function returning function in the js 
// use the concepts of callback function 

const func = ()=>{
    // create the another function 
    const add = function(a, b){
        console.log(a+b);
    }
    return add;
}

const data = func();
data(23,34);