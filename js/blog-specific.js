const contentContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `http://www.joakimvanebo.one/wp-json/wp/v2/blogs2/${id}?acf_format=standard`;
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
    const headline = content.acf.h2;
    const img1 = content.acf.image1;
    const paragraph1 = content.acf.p1;
    const paragraph2 = content.acf.p2;
    const img2 = content.acf.image2;
    const img3 = content.acf.image3;
    const img5 = content.acf.image5_last;
    const paragraph3 = content.acf.p3;
    const img4 = content.acf.image4;
    const paragraph4 = content.acf.p4;
    const paragraph5 = content.acf.p5;
    const score = content.acf.score;
    const lineup1 = content.acf.lineup1;
    const lineup2 = content.acf.lineup2;

    contentContainer.innerHTML =    `<div class="content">
                                    <h2 class="headline">${headline}</h2>
                                    <img src="${img1}" class="firstImg" alt="${headline}"/>
                                    <p class="paragraph-one">${paragraph1}</p>
                                    <p class="paragraph-two">${paragraph2}</p>
                                    <img src="${img2}" class="firstImg" alt="${headline}"/>
                                    <img src="${img3}" class="firstImg" alt="${headline}"/>
                                    <img src="${img5}" class="firstImg" alt="${headline}"/>
                                    <p class="paragraph-three">${paragraph3}</p>
                                    <img src="${img4}" class="firstImg" alt="${headline}"/>
                                    <p class="paragraph-four">${paragraph4}</p>
                                    <p class="paragraph-five">${paragraph5}</p>
                                    <p class="score">${score}</p>
                                    <p class="lineup-one">${lineup1}</p>
                                    <p class="lineup-two">${lineup2}</p>
                                    </div>`

}

