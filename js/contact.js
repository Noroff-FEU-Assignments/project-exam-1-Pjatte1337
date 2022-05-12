// Form
function validation() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var subject = document.getElementById("subject").value;

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    var text;

    error_message.style.padding = "10px";
    if ( firstname.length < 5) {
        text = "Please Enter Valid Firstname";
        error_message.innerHTML = text;
        return false;
    }
    if ( lastname.length < 5) {
        text = "Please Enter Valid Lastname";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 15) {
        text = "Please Enter min 15 characters";
        error_message.innerHTML = text;
        return false;
    }
    if ( email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if ( message.length < 25) {
        text = "Please Enter Min 25 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Succesfully!")
    return true;
};


<div class"content-one"> 
<h2 class="headline">${title}</h2>
<p class="paragraph-one">${paragraph1}</p>
<p class="paragraph-two">${paragraph2}</p>
</div>

<div class"content-two"> 
<img src="${img2}" id="modalz" class="image-two" alt="${headline}"/>
<img src="${img3}" id="modalz" class="image-three" alt="${headline}"/>
<img src="${img5}" id="modalz" class="image-four" alt="${headline}"/>
</div>

<div class"content-three"> 
<p class="paragraph-three">${paragraph3}</p>
<p class="paragraph-four">${paragraph4}</p>
</div>

<div class"content-four"> 
<img src="${img4}" id="modalz" class="image-five" alt="${headline}"/>
<p class="paragraph-five">${paragraph5}</p>
<p class="paragraph-six">${paragraph6}</p>
</div>

<div class"content-five"> 
<p class="score"> ${score}</p>
<p class="lineup-one"> ${lineup1}</p>
<p class="lineup-two"> ${lineup2}</p>
</div>