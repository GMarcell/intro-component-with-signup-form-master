const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type=email]')

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    if (validateEmail(emailValue)) {
        form.classList.remove('error')
    } else {
        form.classList.add('error')
    }
})