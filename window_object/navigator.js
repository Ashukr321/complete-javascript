const navi = document.getElementById("navigator");

// window navigator 

// these all are important properties that used in window navigator 


// 1 appCodeName  
//  this gives the browser name 

let  browswer = navigator.appCodeName;
console.log(browswer);



// appName
let apName = navigator.apName;
console.log(apName);

// // appVersion
let apV = navigator.appVersion;
console.log(apV);
// // cookieEnabled
let cookies = navigator.cookieEnabled;
console.log(cookies);

// geolocation
// this  navigator gives the current location of the the website 
const p1 = navigator.geolocation.getCurrentPosition;
console.log();

// language
// javaEnabled()
// language
// onLine
// platform
// product
// taintEnabled()
// userAgent

