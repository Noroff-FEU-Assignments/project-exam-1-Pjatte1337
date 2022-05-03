const url = "http://www.joakimvanebo.one/wp-json/wp/v2/blogs2?acf_format=standard";
const postContainer = document.querySelector(".container1");
const perPage = document.querySelector(".more-per-page");

async function getPost (url) {
    const response = await fetch(url)
    const post = await response.json();
    console.log(post);

    postContainer.innerHTML = "";

    post.forEach(post => {
       const name = post.title.rendered;
       const img = post.acf.featured_image;
       const id = post.id;

       postContainer.innerHTML += `<div class="post"> 
                                    <h2>${name}</h2>
                                    <img src="${img}" class="movie-img" alt="${name}"/>
                                    <a href="./blog-specific.html?id=${id}">
                                    <button class="readBtn">Read More</button>
                                    </a>
                                    </div>`
    });
}
getPost(url);

perPage.onclick = function() {
    const newUrl = url + "&per_page=12"
    postContainer.innerHTML = "";
    getPost(newUrl);
}