const Email = document.getElementById('Emailform');
const password = document.getElementById('Password');
const forgot = document.getElementById('Forgot');
const login = document.getElementById('Login');
const eye = document.getElementById('eye');
const form = document.getElementById('form');


let validEmail = false;
let validPassword = false;

//email event
Email.addEventListener('blur', () => {
  //console.log('email');
  let regex = /^([_0-9a-zA-Z]+)@([\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let emailvalue = Email.value;
  //console.log(regex, emailvalue);
  if (regex.test(emailvalue)) {
    //console.log("valid email");
    Email.classList.remove('is-invalid');
    validEmail = true;
  }
  else {
    //console.log("invalid email");
    Email.classList.add("is-invalid");
    validEmail = false;
  }
});

//password event
password.addEventListener('blur', () => {
  //console.log('email');
  let regex = /^([0-9a-zA-Z]){8,20}$/;
  let passwordvalue = password.value;
  //console.log(regex, passwordvalue);
  if (regex.test(passwordvalue)) {
    //console.log("valid password");
    password.classList.remove('is-invalid');
    eye.style.display = "block";
    validPassword = true;
  }
  else {
    //console.log("invalid password");
    password.classList.add("is-invalid");
    eye.style.display = "none";
    validPassword = false;
  }
});

//login event
login.addEventListener('click', (e) => {
  e.preventDefault();
  //console.log('login clicked');
  if (Email.value.length == 0 && password.value.length == 0) {
    //console.log('incomplete details');
    alert('Please fillup the required details');
  }
})

//to show password
function showpassword() {

  if (eye.classList.contains("bi-eye-fill")) {
    password.setAttribute("type", "text");
    eye.classList.remove("bi-eye-fill");
    eye.classList.add("bi-eye-slash-fill");
  } else {
    password.setAttribute("type", "password");
    eye.classList.remove("bi-eye-slash-fill");
    eye.classList.add("bi-eye-fill");
  }


  //defer to registration page
  const register = document.getElementById('Register');

  register.addEventListener('click', () => {
    location.assign('register_index.html');
    console.log('deferred');
  })

} 