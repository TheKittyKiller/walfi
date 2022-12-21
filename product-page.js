

const buttons = document.querySelectorAll("[data-caro-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const offset = button.dataset.caroButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-caro]")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex =  [...slides.children].indexOf(activeSlide) + offset
if (newIndex < 0 ) newIndex = slides.children.length - 1
if (newIndex >= slides.children.length) newIndex = 0

slides.children[newIndex].dataset.active = true 
delete activeSlide.dataset.active

  })
})


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