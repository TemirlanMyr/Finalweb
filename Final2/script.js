document.querySelector('.button').onclick = function(){
var password = document.querySelector('.password').value,
confirmPassword = document.querySelector('.confirmPassword').value;
if(password == ""){
alert("Field cannot be empty.");
}
else if(password != confirmPassword){
alert("Password do not match.");
return false
}
}
const email = document.getElementById("email");
const password = document.getElementById("password");
		email.addEventListener('input',()=>{
			const emailBox = document.querySelector('.emailBox');
			const emailText = document.querySelector('.emailText');
			const emailPattern = /[A-Za-z0-9._%+-]+@(gmail|Yandex|yahoo|mail)+\.[A-Za-z]{1,63}$/;

			if(email.value.match(emailPattern)){
				emailBox.classList.add('valid');
				emailBox.classList.remove('invalid');
				emailText.innerHTML = "Your Email Address is Valid"; 
			}else{
				emailBox.classList.add('invalid');
				emailBox.classList.remove('valid');
				emailText.innerHTML = "Your email is not valid."; 
			}
		});

		password.addEventListener('input',()=>{
			const passBox = document.querySelector('.passBox');
			const passText = document.querySelector('.passText');
			const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&].{8,}/;

			if(password.value.match(passPattern)){
				passBox.classList.add('valid');
				passBox.classList.remove('invalid');
				passText.innerHTML = "Your Password is valid"; 
			}else{
				passBox.classList.add('invalid');
				passBox.classList.remove('valid');
				passText.innerHTML = "Your password must contain 8 characters."; 
			}
		});