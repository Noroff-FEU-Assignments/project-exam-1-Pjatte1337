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
        const post = await response.json();

        console.log(post);

            const headline = post.acf.h1;
            const img1 = post.acf.image1;
            const title = post.acf.h2;
            const paragraph1 = post.acf.p1;
            const paragraph2 = post.acf.p2;
            const img2 = post.acf.image2;
            const img3 = post.acf.image3;
            const img4 = post.acf.image4;
            const paragraph3 = post.acf.p3;
            const paragraph4 = post.acf.p4;
            const img5 = post.acf.image5;
            const paragraph5 = post.acf.p5;
            const paragraph6 = post.acf.p6;
            const score = post.acf.score;
            const lineup1 = post.acf.lineup1;
            const lineup2 = post.acf.lineup2;
            const HTMLTitle = post.acf.name;
            const author = post.acf.author;

            

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
                                                    popUpModal(imgSrc);
                                                    console.log(imgSrc)
                                                });
                                            });

                                            let popUpModal = (src) => {
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

   