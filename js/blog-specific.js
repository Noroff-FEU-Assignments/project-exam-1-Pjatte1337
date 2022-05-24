const contentContainer = document.querySelector(".container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const newTitle = document.querySelector("title");

console.log(id);

newTitle.innerHTML = "";

const url = `https://www.joakimvanebo.one/wp-json/wp/v2/blogs2/${id}?acf_format=standard`;

console.log(url);



async function fetchContent() {

    try {
        const response = await fetch(url);
        const content = await response.json();

        console.log(content);

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
            const HTMLTitle = content.acf.name;
            const author = content.acf.author;

            

            contentContainer.innerHTML = `  <div class="blog-content">
                                            <h1 class="headline">${headline}</h1>

                                            <div class="top">
                                            <img src="${img1}" class="image image-one" alt="${headline}"/>
                                            </div>

                                            <div class="content-one"> 
                                            <h2 class="headline-two">${title}</h2>
                                            <p class="paragraph-one">${paragraph1}</p>
                                            <p class="paragraph-two">${paragraph2}</p>
                                            </div>

                                            <div class="content-two"> 
                                            <img src="${img2}" class="image image-two" alt="${headline}"/>
                                            <img src="${img3}" class="image image-three" alt="${headline}"/>
                                            <img src="${img4}" class="image image-four" alt="${headline}"/>
                                            </div>

                                            <div class="content-three"> 
                                            <p class="paragraph-three">${paragraph3}</p>
                                            <p class="paragraph-four">${paragraph4}</p>
                                            </div>

                                            <div class="content-four"> 
                                            <img src="${img5}" class="image image-five" alt="${headline}"/>
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
                                            

                                            // Creating the modal for making the post images bigger
                                            const images = document.querySelectorAll(".image");
                                            let imgSrc;

                                            images.forEach((img) => {
                                                img.addEventListener("click", (e) => {
                                                    imgSrc = e.target.src;
                                                    popUp(imgSrc);
                                                    console.log(imgSrc)
                                                });
                                            });

                                            let popUp = (src) => {
                                                const modal = document.createElement("div");
                                                modal.setAttribute("class", "modal");
                                                document.querySelector(".container").append(modal);
                                                const newImage = document.createElement("img");
                                                newImage.setAttribute("src", src);
                                    
                                                window.onclick = function (event) {
                                                    if (event.target == modal) {
                                                      modal.style.display = "none";
                                                    }
                                                  };
                                    
                                                modal.append(newImage);
                                            };

                                            newTitle.innerHTML += `Calcio || ${HTMLTitle}`
                                            
                                        } catch (error) {
                                            contentContainer.innerHTML += `An error has occured, please return to main page or contact us`;
                                        }
        }
    

fetchContent();

   