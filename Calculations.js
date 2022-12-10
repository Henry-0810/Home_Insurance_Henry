const inputs = document.querySelectorAll('.field');
for(const input of inputs){
    input.setAttribute('required',"required");
}

let name = document.getElementById("name");
if(/\d/.test(name.value)) {
    alert("Name cannot contain numbers!");
}
