// window  object is clinet side top level clint side javascript 

// window object represent the broswer windows 
// it support the all browser 

// const a = window;
// console.log( typeof a);
// // window is also itself a object type of data in the js 

// // window is also know  as this  
// const b = this;
// console.log(b);


// // window and this are same things in the js 

// console.log(window==this);

// // window have many function and properties 
// console.log(typeof window.document);

//  window object list are ...
/*



addeventlistener()    =>  done 
alert()               => done
atob()                =>  decode  the string 
blur()                =>
btoa()                =>enode the string
clearInterval()          
clearTimeout()
close()
closed
confirm()             => done 
console               => done 
defaultStatus        
document                this is object 
focus()
frameElement
frames
history
getComputedStyle()
innerHeight         done 
innerWidth            => done 
length              =>this return the how many number of the frame number in the window 
localStorage      =>
location
matchMedia()
moveBy()
moveTo()
name
navigator
open()              =>done
opener
outerHeight
outerWidth
pageXOffset
pageYOffset
parent
print()
prompt()            =this is used to take the user input 
removeEventlistener()
resizeBy()
resizeTo()
screen
screenLeft
screenTop
screenX
screenY
scrollBy()
scrollTo()
scrollX
scrollY
sessionStorage
self
setInterval()
setTimeout()
status
stop()
top

*/

// here we see the all the methods of the  window object 

// const bt = document.getElementById('btn');
// const para = document.getElementById('p');

// bt.addEventListener("click",()=>{

    // alert("thanku  for clicling me ");
    // confirm("are you confirm ");

    // window.open();
    // this open new window 


// })

// bt.addEventListener("click",()=>{
//     para.innerText ="this is ashutosh kumar change by js dom ";
// })

// const ind= prompt("enter your name");
// console.log(ind);




// 3 atob methods 
// this is used for the decode the string 
// let name = "ashutosh";
// let encode = btoa(name);
// console.log(encode);
// console.log(atob(encode));

//btoa this methods is used for the  encode the string 



// const pt = setInterval(()=>{
//     prompt("enter your name!");
// },1000)

// clearInterval(pt,5000);


// mini timing project 
// const btn = document.getElementById('btn');
// const para = document.getElementById('p');

//  const myTimer  = setInterval(()=>{
//     const data = new Date();
//     para.innerText = data.toLocaleTimeString();
// },1000);

// btn.addEventListener("click",()=>{
//     btn.innerText= 'Resune ';
//     clearInterval(myTimer);
// })






// inner height: this return the height of the current window screen 

// const height = window.innerHeight
// console.log(height);

//innerwidth   this  return the height  of the current window 
// const width = window.innerWidth ;
// console.log(width);



// locastore in the js 
// this is the most imporant in the js 
// by this browser store the data in the browser 

// lets see the example 
// this  data is set by the setItem methods 
// and localstorage data is get  by the getItem methods 

const para = document.getElementById('p');

window.localStorage.setItem("name","ashutosh kumar singh");
para.innerText = localStorage.getItem("name");


// localsotage is the typeof the obeject that store the data in the key value pairs 

console.log(typeof window.localStorage);