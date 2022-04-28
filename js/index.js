const url = "http://www.joakimvanebo.one/wp-json/wp/v2/posts?per_page=6";

const movieContainer = document.querySelector(".slider-container");

async function getProduct(){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    movieContainer.innerHTML =" ";

    products.forEach(movie => {
        const images = movie.featured_image_url;
        const name = movie.title.rendered;


        movieContainer.innerHTML += `<div class="slide">
                                    <img src="${images}" class="slide-img" alt="${name}"/>
                                    <h3>${name}</h3>
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

getProduct();