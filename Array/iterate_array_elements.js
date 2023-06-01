//iterate array elements


let arr = [2, 3, 4, 2, 3, 4, 45, 5, 5, "ASHUTOSH", "ankit", "raju"];

// for loop 
// while 
// for of loop 
// for in loop 
// array destructring


// mostly used in the react 



// for loop on the array 
// let cnt = 0 ;
// for (let i = 0; i < arr.length; i++){
//     cnt++;
//     console.log(arr[i]);
// }

// console.log(cnt);


// print the array element in reverse order by for loop 
// for (let i = arr.length-1; i>=0;i--){
//     console.log(arr[i]);
// }


// while loop 
// let i = 0; 
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// reverse print the array elements 
// let i = arr.length-1;
// while(i>=0){
//     console.log(arr[i]);
//     i--;
// }


// for of loop in the javascript 
// this is similar to the for each loop that we used in the other programming language 

// for(let x of arr){
//     console.log(x);
// }

// for in loop 
// it gives the index of the array 


for(let x in arr){
    console.log(arr[x]);
}


