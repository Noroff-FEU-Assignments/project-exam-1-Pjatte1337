const url = "https://www.joakimvanebo.one/wp-json/wp/v2/posts?per_page=6";

const slider = document.querySelector(".slider-container");

async function FetchApi(){
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);

    slider.innerHTML =" ";

    post.forEach(posts => {
        const images = posts.featured_image_url;
        const name = posts.title.rendered;
        const id = posts.id;


        slider.innerHTML += `<div class="slide">
                                    <img src="${images}" class="slide-img" alt="${name}"/>
                                    <h3>${name}</h3>
                                    <a href="./blog-specific.html?id=${id}">
                                    <button class="readBtn">Read More</button>
                                    </a>
                                    </div>`;
        
    });

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    slides.forEach(function(slide,index){
        slide.style.left = `${index * 100}%`;
    });

    let counter = 0;

    nextBtn.addEventListener("click",function(){
    counter++;
    carousel();
    });
    prevBtn.addEventListener("click",function(){
    counter--;
    carousel();
    });

    function carousel () {
        //slides
    
    if(counter === slides.length){
    counter = 0;
    }
    if(counter < 0 ) {
    counter = slides.length - 1;
        }
    
    slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`
    });
}
}

FetchApi();