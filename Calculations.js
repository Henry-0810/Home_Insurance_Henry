const inputs = document.querySelectorAll('.field');
for(const input of inputs){
    input.setAttribute('required',"required");
}

const startingMin = 4;
let time = startingMin*60;

const countdown = document.getElementById("countdown");

setInterval(updateCount,1000);
function updateCount(){
    const min = Math.floor(time/60);
    let seconds = time%60;

    seconds = seconds < 10? '0' + seconds: seconds;
    countdown.innerHTML = `${min}:${seconds}`;
    time--;
}

let validation = function(){
    let name = document.getElementById("name");
    if(!/^[A-Za-z\s]*$/.test(name.value)) {
        name.focus();
        name.value = "Incorrect format!";
    }

    let email = document.getElementById("email");
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    if(!emailRegex.test(email.value)){
        email.focus();
        email.value = "Incorrect format!";
    }

    let bedroom = document.getElementById("bedrooms");
    let year = document.getElementById("year");
    let claims = document.getElementById("yearsClaim");
    let isDigitValidArr = [bedroom,year,claims];
    for (let i = 0; i < isDigitValidArr.length; i++) {
        if(!Number.isInteger(isDigitValidArr[i])){
            isDigitValidArr[i].focus();
            isDigitValidArr.value = "Only numbers!";
        }
    }
}

let btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener('click',validation,false);
if(name.value ===""){
    name.style.border = "1px solid Black";
}











