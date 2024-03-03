const passwordInput=document.querySelector('#user_password');
const confirmPasswordinput=document.querySelector("#user_confirmpassword");
const passwordMatchMessage=document.querySelector('#passwordMatch');

function checkPasswordMatch(){
    if(passwordInput.value !== confirmPasswordinput.value){
        passwordMatchMessage.textContent='The passwords do not match*';
        passwordMatchMessage.style.color='red'
    } else {
        passwordMatchMessage.textContent='The passwords match!';
        passwordMatchMessage.style.color='green';
    }
}

passwordInput.addEventListener('input',checkPasswordMatch);
confirmPasswordinput.addEventListener('input',checkPasswordMatch);