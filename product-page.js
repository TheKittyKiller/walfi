window.addEventListener("DOMContentLoaded", init);

const endpoint = "https://sebmelph.com/wordpress/wp-json/wp/v2/product?_embed";

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(endpoint);
  showProducts(await result.json());
}

function showProducts(products) {
  console.log(products);
}







// function buttonColor() { 


// document.getElementById("button").style.backgroundColor= '#911';

// }






let button= document.querySelector('#button');

button.addEventListener('click', ()=> button.style.backgroundColor ='grey') 



// const btn= document.getElementById('button');
// index0= 0
// index1= 1

// const colors = ['green', 'blue']; 

// button.addEventListener('click', function buttonColor(){
// button.style.backgroundColor= colors[index]; 
// index= index + 1 
// }); 



