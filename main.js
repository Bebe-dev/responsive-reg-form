
const form = document.getElementById('form');
const fn = document.getElementById('fn');
const ln = document.getElementById('ln');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
   e.preventDefault();

   checkInputs();
});
function checkInputs(){
  const fnValue = fn.value.trim();
  const lnValue = ln.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if (fnValue === '') {
    setErrorFor(fn, 'First name cannot be blank');
  } else{
    setSuccessFor(fn);
  }
  if (lnValue === '') {
    setErrorFor(ln, 'Last name cannot be blank');
  } else {
    setSuccessFor(ln);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
