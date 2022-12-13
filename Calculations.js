//countdown timer
const startingMin = 4;
let time = startingMin*60;

const countdown = document.getElementById("countdown");

let run = setInterval(updateCount,1000);
function updateCount(){
    const min = Math.floor(time/60);
    let seconds = time%60;

    if(time <= 0){
        clearInterval(run);
        document.getElementById("mainDiv").style.visibility = "hidden";
        document.getElementById("sessionExpiredID").style.visibility = "visible";
    }

    seconds = seconds < 10? '0' + seconds: seconds;
    countdown.innerHTML = `You have ${min}:${seconds} to finish the form`;
    time--;
}

//validation
let validation = function(){

    const inputs = document.querySelectorAll('.field');
    for(const input of inputs){
        input.setAttribute('required',"required");
    }

    let name = document.getElementById("name");
    if(!/^[A-Za-z\s]*$/.test(name.value)) {
        name.focus();
        name.value = "Incorrect format!";
    }

    let email = document.getElementById("email");
    if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
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

//running total function
let sumVal = function(){

}














