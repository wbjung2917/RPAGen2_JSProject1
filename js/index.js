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
function clickOperators(operator){    
    let formula=document.getElementById("formula");
    let operatorList=["+","-","*","÷"]
    if(formula.innerHTML.trim()==""){
        console.log("아무것도 없는곳에 연산자를 입력할 수 없습니다.")
    }
    else if(!operatorList.includes(formula.innerHTML.charAt(formula.innerHTML.length-1))){
        formula.innerHTML+=operator.innerHTML;
    }
    else{
        console.log("연산자를 이어서 입력할 수 없습니다.");
    }
}