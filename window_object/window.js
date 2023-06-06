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
innerWidth          => done 
length              =>this return the how many number of the frame number in the window 
localStorage        => done 
location            =>
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

// const para = document.getElementById('p');

// window.localStorage.setItem("name","ashutosh kumar singh");
// para.innerText = localStorage.getItem("name");

//remove the localstorage items

// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));

//clear the localstorage
// localStorage.clear();

// localsotage is the typeof the obeject that store the data in the key value pairs
//no expiration time
// console.log(typeof window.localStorage);

// location   this most important
// location is not a function
// this is object that is provided in to the window object

// const b = document.getElementById("btn");
// const b1 = document.getElementById("btn1");

// const currentPage = window.location;
// console.log(typeof currentPage);

// const url = window.location.href; // this gives the url in string fomate
// console.log(typeof url);

// b.addEventListener("click", () => {
//   location.href = "./about.html";
// });

//  here we see the host name of the domain
// const hostName = window.location.hostname;
// console.log(hostName);
// string
// window.js:218 127.0.0.1

// pathname
// const path = window.location.pathname;
// console.log(path);
// const curl = `${hostName}${path}`;
// console.log(curl);

// protocol
// this is set of rules that  provide the sequrity

// const protcol = location.protocol;
// console.log(protcol); // http
// http -> hyper text transfer protocol

// location.assign
// const assign = location.assign;
// console.log(assign);

// ⭐⭐⭐example 


// function newDoc() {
//   b1.addEventListener("click", () => {
//     location.assign("https://www.w3schools.com/sql/default.asp");
//   });
// }


// history 

// here we see the window object history object in the js 

// this is type of object that provided by the window object in the js 
// window object sotre the information about the borwser history 

// example of the history 
// we can move  on browser forward and backward 
// we  have two methods 
// back()
// forwars()



//select the btn 
// const b = document.getElementById("btn");

// here we used the history object 

// const goback = () =>{
//   b.addEventListener("click",()=>{
//   location.href='./about.html';

//   //  const data =  window.history.back();
//   //  console.log(data);
//   })
// }


// function newDoc() {
//   b.addEventListener("click", () => {
//     location.assign("https://www.w3schools.com/sql/default.asp");
//   });
// }



// function goBack() {
//   window.history.back()
// }



// session storage in the js 

// this is similar to the localstorage in the js 

// localstorage does't expire ,
//  data in sessionStorage is cleared when the page session ends 


// when a particular new tab in the browser is open then uniques page 
// session is creaeted and assigned to that particular tab , that  session is valid only 
// for that particular tab . container

// when we close the tab then session is closed 


// data stored in session is specific to the protocol of the pages in particular data 



// same as localsotage we can also store the data in key value pair data 

// here we see the example 

// const key = prompt("enter your key for session storage");
// const value = prompt("enter  the value of your key  for session storage ");


// const data = sessionStorage.setItem(key,value);
// alert(sessionStorage.getItem(key));



// clear methods 
// to clear all the data from the sessionstorage in the js 

// sessionStorage.clear();

