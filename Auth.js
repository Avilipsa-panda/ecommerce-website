function signupUser(e){

e.preventDefault();

const name = document.getElementById("signupName").value;
const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPassword").value;

const user = {name,email,password};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup successful!");

window.location.href="login.html";

}


function loginUser(e){

e.preventDefault();

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

const user = JSON.parse(localStorage.getItem("user"));

if(user && user.email === email && user.password === password){

alert("Login successful");

localStorage.setItem("loggedIn",true);

window.location.href="index.html";

}

else{

alert("Invalid credentials");

}

}