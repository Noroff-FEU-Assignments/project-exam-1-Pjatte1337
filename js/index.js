const url = "https://www.joakimvanebo.one/wp-json/wp/v2/blogs2?acf_format=standard&per_page=6";

const slider = document.querySelector(".slider-container");

async function FetchApi(){
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);

    slider.innerHTML =" ";

    post.forEach(posts => {
        const images = posts.acf.featured_image;
        const name = posts.title.rendered;
        const id = posts.id;


        slider.innerHTML += `<div class="slide">
                                    <a href="./blog-specific.html?id=${id}">
                                    <img src="${images}" class="slide-img" alt="${name}"/>
                                    <h3>${name}</h3>
                                    </a>
                                    </div>`;
        
    });

    //slider
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




// Modal
const modalButton = document.querySelector (".content-img");
const modal = document.querySelector (".modal");
const modalCloseButton = document.querySelector (".modal-close");

modalButton.addEventListener("click", event => {
    toggleModal()
});

modalCloseButton.addEventListener("click", event => {
    toggleModal()
});




modal.addEventListener("click", event => {
    if (event.currentTarget===event.target) 
        toggleModal();
});

function toggleModal() {
    if(getComputedStyle(modal).display==="flex") {
        modal.classList.add("modal-hide");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove ("modal-show", "modal-hide");
            document.body.style.overflow = "initial";  
        }, 200);
    }
    else {
        modal.style.display = "flex";
        modal.classList.add("modal-show");
        document.body.style.overflow = "hidden";
    }
}