let p1 = document.getElementById("p1");
let inputFormData = location.search.slice(1);
while(inputFormData.indexOf('+') !== -1){
    inputFormData = inputFormData.replace("+"," ");
}
inputFormData = decodeURI(inputFormData);
p1.innerHTML = inputFormData;



