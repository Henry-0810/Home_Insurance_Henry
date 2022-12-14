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

//make all fields required
const inputs = document.querySelectorAll('.field');
for(const input of inputs){
    input.setAttribute('required',"required");
}
//validation
let email = document.querySelector("#email");
const emailFormat = /(?:[a-z\d!#$%&'+=?^_`{|}~-]+(?:\.[a-z\d!#$%&'+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z\d](?:[a-z\d-][a-z\d])?.)+[a-z\d](?:[a-z\d-][a-z\d])?|\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?).){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?|[a-z\d-]*[a-z\d]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
let validateMail = function(){
    if(!email.value.match(emailFormat)){
        alert("Invalid Email address!");
        email.style.color = "red";
        return false;
    }
return true;
}

email.addEventListener('focusin',function(){
    this.style.color = "black";
})

let btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener('click',validateMail,false);

//running total
let runTot = document.getElementById("total");
let rad1 = document.querySelectorAll("input[name = 'ques1']"),
    x = rad1.length, t = 0;
let rad2 = document.querySelectorAll("input[name = 'ques2']"),
    y = rad2.length, k = 0;
let txtBoxesVal = document.querySelectorAll('input'),input1 = 0, input2 = 0, input3 = 0;
let selectBoxesVal = document.querySelectorAll('select'), option1 = 0, option2 = 0, option3 = 0, option4 = 0;
let allRadValues = 0, txtBoxValues = 0, listBoxValues = 0;

while(x--) {
    rad1[x].addEventListener('change', function () {
        t = Number(this.value);
        allRadValues = Number(t) + Number(k);
        runTot.value = "€" + ((Number(allRadValues) + Number(txtBoxValues) + Number(listBoxValues))).toFixed(2);
    });
}

while(y--){
    rad2[y].addEventListener('change',function () {
        k = Number(this.value);
        allRadValues = Number(t) + Number(k);
        runTot.value = "€" + ((Number(allRadValues) + Number(txtBoxValues) + Number(listBoxValues))).toFixed(2);
    });
}

for(let txtBox of txtBoxesVal){
    txtBox.addEventListener('change',function(){
        if(txtBox.id === "bedrooms"){
            input1 = (Number(txtBox.value)*10);
            txtBoxValues = Number(input1);
        }
        else if(txtBox.id === "year"){
            input2 = (Number(txtBox.value)*10);
            txtBoxValues = Number(input1) + Number(input2);
        }
        else if(txtBox.id === "yearsClaim"){
            input3 = (Number(txtBox.value)*10);
            txtBoxValues = Number(input1) + Number(input2) - Number(input3);
        }
        runTot.value = "€" + ((Number(allRadValues) + Number(txtBoxValues) + Number(listBoxValues))).toFixed(2);
    });
}

for(let selects of selectBoxesVal){
    selects.addEventListener('change',function(){
        if(selects.id === "propType"){
            option1 = Number(selects.value);
            listBoxValues = Number(option1);
        }
        else if(selects.id === "coverType"){
            option2 = Number(selects.value);
            listBoxValues = Number(option1) + Number(option2);
        }
        else if(selects.id === "contents"){
            option3 = Number(selects.value);
            listBoxValues = Number(option1) + Number(option2) + Number(option3);
        }
        else if(selects.id === "buildings"){
            option4 = Number(selects.value);
            listBoxValues = Number(option1) + Number(option2) + Number(option3) + Number(option4);
        }
        runTot.value = "€" + ((Number(allRadValues) + Number(txtBoxValues) + Number(listBoxValues))).toFixed(2);
    });
}




















