function clickNumbers(number){
    let formula=document.getElementById("formula");
    formula.innerHTML+=number.innerHTML;
}
function clickClear(){
    let history=document.getElementById("history");
    let formula=document.getElementById("formula");
    history.innerHTML="";
    formula.innerHTML="";
}