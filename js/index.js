const url = "http://www.joakimvanebo.one/wp-json/wp/v2/posts?per_page=20";

const sliderItem = document.querySelector(".slider-item");
const sliderItem2 = document.querySelector("slider-item");
const id = 121;

async function fetchApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        const img = json.featured_image_url;

        for (let i = 0; i < json.length; i++) {

            if (i === id) {
            const img = json[i].featured_image_url
            const name = json[i].title.rendered;
      
            sliderItem.innerHTML = `<div class="slider-item slider-show">
                                    <img src="${img}" class="slide-img" alt="${name}"/>
                                    <div class="info">
                                    <h2> ${name} </h2>
                                    </div>
                                    </div>`;
            }

            const img = json[i].featured_image_url
            const name = json[i].title.rendered;
      
            sliderItem.innerHTML = `<div class="slider-item slider-show">
                                    <img src="${img}" class="slide-img" alt="${name}"/>
                                    <div class="info">
                                    <h2> ${name} </h2>
                                    </div>
                                    </div>`;

            else {
            sliderItem2.innerHTML = `<div class="slider-item">
                                    <img src="${img}" class="slide-img" alt="${name}"/>
                                    <div class="info">
                                    <h2> ${name} </h2>
                                    </div>
                                    </div>`;
            }
        }   
    }catch (error) {
        console.log(error); 
    }   
}    
fetchApi();
