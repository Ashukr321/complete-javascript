//here we see the find methods in the js 

// this work on boolean value truth and false 
// check the passing data is present or not in the function 
// this also take the callback function 


const animal = ["dog","cat","monkey"];
const ans = animal.find((data)=>{
    return (data.length===3);
})

console.log(ans);

// example 
// array of object 
const users = [
    {userId :1,name :"Ashutosh "},
    {userId :2,name :"ankit "},
    {userId :3,name :"rahul "},
    {userId :4,name :"khushi "},

]

// aply the find methods 
const ans2 = users.find((data)=>{
    return data.userId == 2;

});

// console.log(ans2["name"]);
// console.log(ans2.name);

