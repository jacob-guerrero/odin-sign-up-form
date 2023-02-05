function matchPassword(e) {  
    let pw1 = document.getElementById("password1").value;  
    let pw2 = document.getElementById("password2").value;  
    if((pw1 === pw2) && (pw1 !== ""))
    {   
      alert("Passwords matched");
    } else {
      e.preventDefault()
      return false;
    }  
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    matchPassword(e);
})