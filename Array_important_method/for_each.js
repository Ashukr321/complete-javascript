// for each method od the arrya 

// create the array 
// const data = [3,4,5,5,"ashutosh ",
//     {
//         name :"ankit",
//         age:34

//     }
// ]


// apply the for each method 
// data.forEach((item)=>{
//     console.table(item);
// });


//  this is visited to each element of the array once times 


//example 
// const array = ["a","b","c"];


// array.forEach((data,index)=>{
//     console.log(`${data} is at index ${index}`);
// })

// forfunction can take three parameter in callback function 
// cuurent element , index, array ;





// example for loop to for each loop 

//create the array 
// const items = ["items1","items2","items3"];
// const copyArr = [];

// for loop 
// for(let i = 0 ;i<items.length; i++){
//     copyArr.push(items[i]);

// }


// after :by for each loop 
// items.forEach((data)=>{
//     copyArr.push(data);
// });
// console.log(copyArr);

// printing the array while we initilise the array
// function printNum(data){
//     console.log(data);
// }

// const number = [3,4,5,5].forEach(printNum);


// count the number of element and sum of the all the array of the element 

// class of the counter 
class Counter {
    // this is constructor 
    constructor() {
      this.sum = 0;
      this.count = 0;
    }

    // methods  take array as a argument
    add(array) {
      // Only function expressions will have its own this binding
      array.forEach((entry)=> {
        this.sum += entry;
        ++this.count;
      },this);
    }
  }
  

  // create the object of the class 

  const obj = new Counter();
  //calling the methods addd 

  obj.add([2, 5, 9]);
  
  console.log(obj.count); // 3
  console.log(obj.sum); // 16
  