// here we see the every methods of the js 

// every method check the  condtion for the all the element 
// if the all the condition is varify then it gives the true 
// if one condition becomes false then output gives false 

// check the array is subse or not 

// create issubset 
const isSubset = (array1,array2)=>{
   array1.every((element)=>{
        array2.includes(element);
    })

}

console.log(isSubset([1,2,3,4],[2,3]));