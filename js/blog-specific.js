const contentContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `http://www.joakimvanebo.one/wp-json/wp/v2/blogs/${id}?acf_format=standard`;
console.log(url);

async function fetchContent() {
    try {
        const response = await fetch(url);
        const content = await response.json();

        console.log(content);

        createHTML(content);

    }catch(error){
    }
} 
fetchContent ();


function createHTML(content) {
    const post = content.content.rendered;

    contentContainer.innerHTML =    `<div class="content">
                                    <p>${post}</p>
                                    </div>`

}

