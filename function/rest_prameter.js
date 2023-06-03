// rest parameters in the js 
// here 

// calculate the  sum of the all the parmeters 

//here we use the spread operators in the js 

// ...p this gives the array of the all the parameters that come in this 
// function as  parameters in the sum function 

const sum = (...p)=>{
    total = 0; 
    console.log( p);
    for(let i=0; i<p.length; i++){
        total += p[i]; 
    }
    console.log(total);
}

// 

sum(2,3,4,2,-1);
