// window object allow  us to  executet the code 
// in the time intervals 

// example 
// window provide some inbuilt function in the js 


//example 
// setTimeout 
// this function take a callaback function and 2nd parameters is 
// dalay time 

const list1 = document.getElementById("list1");

const setTime = setTimeout(()=>{
    list1.innerHTML= "<h1>setTimeout run after 5 sec</h1>"
},5000)

// to stop the setTimeout we have a another function 
// that is provided by the window object 
// clearTimeout;

setTimeout(()=>{
    console.log((list1.innerText));
    list1.innerHTML= "";    
    
},10000)


// setinterval methods executed repealty without 
//break 

const list2 = document.getElementById("list2");
const  inter= setInterval(()=>{
    list2.innerHTML= "<h1>setInterval run repealty run after 3000</h1>"
},3000);
// we have a another function that is know as clearInterval 
// that clearthe  interval of the function excution 

clearInterval(inter);

// mini project clock project 
// create the object of the data 

const clock = ()=>{
    const list3 = document.getElementById("list3");

    const d = new Date();

    let dt = d.toLocaleTimeString();
    

    list3.innerHTML= `<h1>${dt}</h1>`;

}

setInterval(clock,1000);




