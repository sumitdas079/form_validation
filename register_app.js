const fname = document.getElementById('FirstName');
const lname = document.getElementById('LastName');
const email = document.getElementById('Emailform');
const eye = document.getElementById('eye');
const create_pass = document.getElementById('CreatePass');
const confirm_pass = document.getElementById('ConfirmPass');
const register = document.getElementById('Register');

let passwordvalue;

let fnamevalid = false;
let lnamevalid = false;
let validEmail = false;
let valid_create_pass = false;
let valid_confirm_pass = false;


//first name event
fname.addEventListener('blur', () => {
  //console.log('email');
  let regex = /^([a-zA-Z])/;
  let fnamevalue = fname.value;
  //console.log(regex, emailvalue);
  if (regex.test(fnamevalue)) {
    //console.log("valid email");
    fname.classList.remove('is-invalid');
    fnamevalid = true;
  }
  else {
    //console.log("invalid email");
    fname.classList.add("is-invalid");
    fnamevalid = false;
  }
});

//last name event
lname.addEventListener('blur', () => {
  //console.log('email');
  let regex = /^([a-zA-Z])/;
  let lnamevalue = lname.value;
  //console.log(regex, emailvalue);
  if (regex.test(lnamevalue)) {
    //console.log("valid email");
    lname.classList.remove('is-invalid');
    lnamevalid = true;
  }
  else {
    //console.log("invalid email");
    lname.classList.add("is-invalid");
    lnamevalid = false;
  }
});

// email event
email.addEventListener('blur', () => {
  //console.log('email');
  let regex = /^([_0-9a-zA-Z]+)@([\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let emailvalue = email.value;
  //console.log(regex, emailvalue);
  if (regex.test(emailvalue)) {
    //console.log("valid email");
    email.classList.remove('is-invalid');
    validEmail = true;
  }
  else {
    //console.log("invalid email");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});


//creating password
create_pass.addEventListener('blur', () => {
  //console.log('password created');
  let regex = /^([0-9a-zA-Z]){8,20}$/;
  passwordvalue = create_pass.value;
  console.log(regex, passwordvalue);
  if (regex.test(passwordvalue)) {
    //console.log("valid password");
    create_pass.classList.remove('is-invalid');
    eye.style.display = "block";
    valid_create_pass = true;
  }
  else {
    //console.log("invalid password");
    create_pass.classList.add("is-invalid");
    eye.style.display = "block";
    eye.style.color = "red";
    valid_create_pass = false;
  }
});


//to match both passwords
confirm_pass.addEventListener('blur', () => {
  //console.log('password confirmed');
  let conf_passwordvalue = confirm_pass.value;
  //console.log(conf_passwordvalue);
  if (conf_passwordvalue === passwordvalue) {
    //console.log('password matched');
    confirm_pass.classList.remove('is-invalid');
    valid_confirm_pass = true;
  } else {
    // console.log('password not matched');
    confirm_pass.classList.add('is-invalid');
    valid_confirm_pass = false;
  }
})

//register event
register.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('register clicked');
  if (fname.value.length == 0 && lname.value.length == 0 && email.value.length == 0 && create_pass.value.length == 0 && confirm_pass.value.length == 0) {
    console.log('incomplete details');
    alert('Please fillup the required details');
  }

});


//to show password
function showpassword() {

  if (eye.classList.contains("bi-eye-fill")) {
    create_pass.setAttribute("type", "text");
    eye.classList.remove("bi-eye-fill");
    eye.classList.add("bi-eye-slash-fill");
  } else {
    create_pass.setAttribute("type", "password");
    eye.classList.remove("bi-eye-slash-fill");
    eye.classList.add("bi-eye-fill");
  }
}

//defer to login page
const sign = document.getElementById('Sign-in');

sign.addEventListener('click', () => {
  location.assign('login_index.html');
  console.log('deffered');
});

