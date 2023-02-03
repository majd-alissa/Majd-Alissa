

function saveinput(){
var savedata=document.getElementById("number-save").value 

document.getElementById("accountNumber","Card-Holder").innerHTML=savedata;



var savedataname=document.getElementById("name-save").value; 
    
document.getElementById("Card-Holder").innerHTML=savedataname;


var savedataname=document.getElementById("address-save").value; 
    
document.getElementById("Card-address").innerHTML=savedataname;



var savedataname=document.getElementById("cvs-save").value; 
    
document.getElementById("csv-number").innerHTML=savedataname;


var savedataname=document.getElementById("date-save").value; 
    
document.getElementById("datess").innerHTML=savedataname;


}


function buyAlert(){
    window.alert("The purchase has not been activated yet.")
}



function toFill(){

document.getElementById("number-save").value="3984245629082215";

document.getElementById("name-save").value="Majd Alissa";

document.getElementById("address-save").value="Amman";

document.getElementById("cvs-save").value="672";

document.getElementById("date-save").value="2025-01-09";

}