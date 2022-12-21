window.addEventListener("DOMContentLoaded", init);

const endpoint = "https://sebmelph.com/wordpress/wp-json/wp/v2/product?_embed";

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(endpoint);
  handleImages(await result.json());
}

function handleImages(images) {
  console.log(images);
  images.forEach(showImages);
}

function showImages(item) {
  const template = document.querySelector(".image-template").content;

  const copy = template.cloneNode(true);

  copy
    .querySelector(".productimg")
    .setAttribute(
      "src",
      item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
    );

  const parent = document.querySelector(".template-holder");

  parent.appendChild(copy);
}

