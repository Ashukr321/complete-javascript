function getNew() {
  let rand = Math.random() * 100;
  rand = Math.floor(rand);
  const url = `https://jsonplaceholder.typicode.com/todos/${rand}`;
  const resonse = fetch(url)
    .then((data1) => {
      return data1.json();
    })
    .then((data) =>{
        document.getElementById("value").innerText =data["title"];
    });
}

