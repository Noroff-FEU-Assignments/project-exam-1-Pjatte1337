const baseUrl = "http://www.joakimvanebo.one/wp-json/wp/v2/posts";

const movieContainer = document.querySelector(".container");

async function getProduct(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);


}

getProduct(baseUrl);