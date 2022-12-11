const inputs = document.querySelectorAll('.field');
for(const input of inputs){
    input.setAttribute('required',"required");
}

let name = document.getElementById("name");
if(!/^[A-Za-z\s]*$/.test(name.value)) {
    alert("Only letters and spaces are allowed in a name!");
}

let email = document.getElementById("email");
if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    alert("Wrong email format!");
}


