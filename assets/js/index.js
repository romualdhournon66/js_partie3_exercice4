function changeInput() {
    var pwd1 = document.getElementById('password').value;
    var pwd2 = document.getElementById('confirmPassword').value;

        if (pw1 != pw2){
          document.getElementById('password').style.border='3px solid red';
          document.getElementById('confirmPassword').style.border='3px solid red';
        }
        else{
          alert ("les mot de passe ne correspondent pas")
          document.getElementById('password').style.border='3px solid green';
          document.getElementById('confirmPassword').style.border='3px solid green';
        }
}
