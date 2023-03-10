let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let pw1 = document.getElementById("password1");  
let pw2 = document.getElementById("password2");  

function fillForm() {
  /* Focus empty inputs */
  if (firstName.value === "") {
    firstName.focus();
  } else if (lastName.value === "") {
    lastName.focus();
  } else if (email.value === "") {
    email.focus();
  } else if (pw1.value === "") {
    pw1.focus();
  } else if (pw2.value === "") {
    pw2.focus();
  }
}

function matchPassword(e) {  
    if((pw1.value !== pw2.value))
    {
      document.querySelector('.pwd-ver').style.display = 'block';
      pass.forEach(pwd => {
        pwd.style.borderColor = 'crimson';
      })

      /* Stopping form submit and reset if the validation fails */
      e.preventDefault()
      return false;
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  fillForm();
  matchPassword(e);
})


const pass = document.querySelectorAll('#password1, #password2');
pass.forEach(pwd => {
  pwd.addEventListener('keyup', () => {
    if((pw1.value !== "") || (pw2.value !== ""))
      {
        /* Hide span */
        document.querySelector('.pwd-ver').style.display = 'none';
        pwd.style.borderColor = '#E5E7EB';
      } else {
        /* Show span */
        document.querySelector('.pwd-ver').style.display = 'block';
      }
  })
});

/* const spans = document.querySelectorAll('.visible');
spans.forEach(span => {
  span.style.display = 'none';
}); */