const bt = document.getElementById('btn');
const showData = document.getElementById('data');
// bt.addEventListener('click',()=>{
//  const pending =    fetch('./data.txt')
//  console.log(pending);
//    pending.then((res)=>{
//     console.log(res);
//      return res.text();
//    }).then((data)=>{
//     console.log(data);
//    })
   
// })

// async and await  handing the error 

bt.addEventListener('click',getData);

 async function getData(){
    const res = await fetch('./data.txt');

    if(!res.ok){
        console.log(res.statusText);
    }else{
        const data = await res.text();
        showData.innerText = data;
    }

   
}   