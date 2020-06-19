function result(op){
     var firstNumber = document.getElementById("firstNumber").value;
     var secondNumber = document.getElementById("secondNumber").value;


     switch(op){
      case'+':
     document.getElementById("result").value = parseInt(firstNumber)+parseInt(secondNumber);
   break;
      case'-':
     document.getElementById("result").value = parseInt(firstNumber)-parseInt(secondNumber);
   break;
      case'*':
     document.getElementById("result").value = parseInt(firstNumber)*parseInt(secondNumber);
   break;
      case'/':
     document.getElementById("result").value = parseInt(firstNumber)/parseInt(secondNumber);
   break;
      default:
     document.getElementById("result").value="";
     document.getElementById("firstNumber").value="";
     document.getElementById("secondNumber").value="";
   }


}










  
