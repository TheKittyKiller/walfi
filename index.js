const endpoint = "https://sebmelph.com/wordpress/wp-json/wp/v2/product"

async function getData() {
  let result = await fetch(endpoint);
  showPosts(await result.json());
}
 
function showPosts(posts) {
  console.log(posts);
}

getData();
