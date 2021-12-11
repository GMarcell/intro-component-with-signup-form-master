const form = document.querySelector('.container .right .form-body form');
const email = document.querySelector(".container .right .form-body form input[name='email']")
const fname = document.querySelector(".container .right .form-body form input[name='fname']")
const lname = document.querySelector(".container .right .form-body form input[name='lname']")
const pass = document.querySelector(".container .right .form-body form input[name='pass']")

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.value.match(passw)) {
        return true;
    } else {
        return false;
    }
}

function required(inputtx) {
    if (inputtx.value == null) {
        return false;
    }
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    let fnameValue = fname.value;
    let lnameValue = lname.value;
    let passValue = pass.value;
    console.log('kepencet')
    if (required(fnameValue)) {
        form.classList.remove('error-fname')
    } else {
        form.classList.add('error-fname')
    }
    if (required(lnameValue)) {
        form.classList.remove('error-lname')
    } else {
        form.classList.add('error-lname')
    }
    if (required(emailValue)) {
        form.classList.remove('error-email')
    } else {
        form.classList.add('error-email')
    }
    if (required(passValue)) {
        form.classList.remove('error-pass')
    } else {
        form.classList.add('error-pass')
    }
    // if (validateEmail(emailValue)) {
    //     form.classList.remove('error')
    //     console.log('masuk if');
    // } else {
    //     form.classList.add('error')
    //     console.log('masuk else');
    // }
})