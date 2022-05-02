const url = "http://www.joakimvanebo.one/wp-json/wp/v2/blogs2/?acf_format=standard"
const postContainer = document.querySelector(".container1");

async function getPost (url) {
    const response = await fetch(url)
    const post = await response.json();
    console.log(post);

    postContainer.innerHTML = "";

    post.forEach(post => {
       const name = post.title.rendered;
       const img = post.featured_image_url;
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