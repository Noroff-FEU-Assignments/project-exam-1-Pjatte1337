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
        text = "Subject must have minimum 15 characters";
        error_message.innerHTML = text;
        return false;
    }
    if ( email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if ( message.length < 25) {
        text = "Message must have minimum 25 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Succesfully!")
    return true;
};








