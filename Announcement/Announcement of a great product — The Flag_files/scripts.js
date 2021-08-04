function checkSubmit(event) {
    if (!checkEmail()) {
        event.preventDefault();
    }

    digest = CryptoJS.MD5(email.value);
    document.getElementById('digest').value = digest.toString();
}
function checkEmail() {
    var reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (reg1.test(email.value) == false){
        email.style.border = "3px solid red";
        document.getElementById('submitButton').disabled=true;
        return false;
    }else{
        email.style.border = "3px solid green";
        document.getElementById('submitButton').disabled=false;
        return true;
    }
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', checkSubmit);
const email = document.getElementById('email');
email.addEventListener('onkeyup', checkEmail);