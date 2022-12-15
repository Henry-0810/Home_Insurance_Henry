let table = document.getElementById("table");
let inputFormData = location.search.slice(1);
inputFormData = decodeURI(inputFormData);
let dataArr = inputFormData.split("&");
let object = {};
for(let str of dataArr){
    str = str.replaceAll("-"," ").replaceAll("+"," ").replaceAll("%40","@");
    let strSplit = str.split("=");
    object[strSplit[0].toString()] = strSplit[1];
}

(object["Ownership"] === "100")? object["Ownership"] = "Owner (€100)": object["Ownership"] = "Tenant (€50)";
(object["Location"] === "100")? object["Location"] = "Dublin (€100)": object["Location"] = "Outside Dublin (€50)";

switch(object["Property Type"]){
    case("75"):{
        object["Property Type"] = "Bungalow (€75)";
        break;
    }
    case("100"):{
        object["Property Type"] = "Country House (€100)";
        break;
    }
    case("50"):{
        object["Property Type"] = "Detached (€50)";
        break;
    }
    case("40"):{
        object["Property Type"] = "Semi Detached (€40)";
        break;
    }
    case("30"):{
        object["Property Type"] = "Terraced (€30)";
        break;
    }
    case("20"):{
        object["Property Type"] = "Flat (€20)";
        break;
    }
}

if(object["Cover Type"] === "50"){
    object["Cover Type"] = "Owner occupied (€50)";
}
else if(object["Cover Type"] === "60"){
    object["Cover Type"] = "Holiday (€60)";
}
else{
    object["Cover Type"] = "Rental (€70)";
}

switch(object["Contents Cover"]){
    case("10"):{
        object["Contents Cover"] = "€0 - €5,000 (€10)";
        break;
    }
    case("20"):{
        object["Contents Cover"] = "€5,001 - €10,000 (€20)";
        break;
    }
    case("30"):{
        object["Contents Cover"] = "€10,001 - €15,000 (€30)";
        break;
    }
    case("40"):{
        object["Contents Cover"] = "€15,001 - €20,000 (€40)";
        break;
    }
    case("50"):{
        object["Contents Cover"] = "€20,001 - €25,000 (€50)";
        break;
    }
}

switch(object["Buildings Cover"]){
    case("20"):{
        object["Buildings Cover"] = "€0 - €100,000 (€20)";
        break;
    }
    case("40"):{
        object["Buildings Cover"] = "€100,001 - €200,000 (€40)";
        break;
    }
    case("60"):{
        object["Buildings Cover"] = "€200,001 - €300,000 (€60)";
        break;
    }
    case("80"):{
        object["Buildings Cover"] = "€300,001 - €400,000 (€80)";
        break;
    }
    case("100"):{
        object["Buildings Cover"] = "€400,001 - €500,500 (€100)";
        break;
    }
}

let keys = Object.keys(object);
for(const key of keys){
    table.innerHTML += "<tr><td><b>" + key + ":</b></td><td>" +object[key] + "</td><br>";
}







