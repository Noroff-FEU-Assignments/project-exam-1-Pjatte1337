const contentContainer = document.querySelector(".container");
const modalz = document.querySelector(".modalz");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `https://www.joakimvanebo.one/wp-json/wp/v2/blogs2/${id}?acf_format=standard`;
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
    const headline = content.acf.h1;
    const img1 = content.acf.image1;
    const title = content.acf.h2;
    const paragraph1 = content.acf.p1;
    const paragraph2 = content.acf.p2;
    const img2 = content.acf.image2;
    const img3 = content.acf.image3;
    const img4 = content.acf.image4;
    const paragraph3 = content.acf.p3;
    const paragraph4 = content.acf.p4;
    const img5 = content.acf.image5;
    const paragraph5 = content.acf.p5;
    const paragraph6 = content.acf.p6;
    const score = content.acf.score;
    const lineup1 = content.acf.lineup1;
    const lineup2 = content.acf.lineup2;

    contentContainer.innerHTML =    `<div class="blog-content">
                                    <h1 class="headline">${headline}</h1>

                                    <div class="top">
                                    <img src="${img1}" id="modalz" class="image-one" alt="${headline}"/>
                                    </div>

                                    <div class="content-one"> 
                                    <h2 class="headline-two">${title}</h2>
                                    <p class="paragraph-one">${paragraph1}</p>
                                    <p class="paragraph-two">${paragraph2}</p>
                                    </div>

                                    <div class="content-two"> 
                                    <img src="${img2}" id="modalz" class="image-two" alt="${headline}"/>
                                    <img src="${img3}" id="modalz" class="image-three" alt="${headline}"/>
                                    <img src="${img4}" id="modalz" class="image-four" alt="${headline}"/>
                                    </div>

                                    <div class="content-three"> 
                                    <p class="paragraph-three">${paragraph3}</p>
                                    <p class="paragraph-four">${paragraph4}</p>
                                    </div>

                                    <div class="content-four"> 
                                    <img src="${img5}" id="modalz" class="image-five" alt="${headline}"/>
                                    <p class="paragraph-five">${paragraph5}</p>
                                    <p class="paragraph-six">${paragraph6}</p>
                                    </div>

                                    <div class="content-five"> 
                                    <p class="score"> ${score}</p>
                                    <p class="lineup-one"> ${lineup1}</p>
                                    <p class="lineup-two"> ${lineup2}</p>
                                    </div>


                                    </div>
                                    `

};


