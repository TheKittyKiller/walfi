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


// document.getElementById("success").style.backgroundColor= '#911';

// }









let button= document.querySelector('#success');

button.addEventListener('click', ()=> button.style.backgroundColor ='grey') 



