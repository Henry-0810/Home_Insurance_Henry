const inputs = document.querySelectorAll('.field');
for(const input of inputs){
    input.setAttribute('required',"required");
}

let totalVal = Number(document.querySelector("#total").value);
let calcTot = function (e) {
        if (e.target.checked) {
            totalVal = Number(e.value);
        }
}

let Q1 = document.querySelectorAll('input[name = "ques1"]');
for (const radioButton of Q1) {
    document.querySelector("#total").addEventListener('change', calcTot,false);
}



let name = document.getElementById("name");
if(!/^[A-Za-z\s]*$/.test(name.value)) {
    alert("Wrong name format!");
}

let email = document.getElementById("email");
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
const isValidEmail = emailRegex.test(email.value);
if(!isValidEmail){
    alert("Wrong email format!");
}





