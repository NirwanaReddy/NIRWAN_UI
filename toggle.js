document.getElementById("addText").innerHTML = "<p>NIRWAN</p>"

function changeColor() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "NIRWAN GAMER ";
    btn.addEventListener("click",function(){
        test();
    });

    document.getElementsByTagName("body")[0].appendChild(btn);

    for(var i=0;i<document.getElementsByTagName("div").length;i++) {
        if(document.getElementsByTagName("div")[i].style.color == "blue"){
             document.getElementsByTagName("div")[i].style.color = "yellow";
             document.getElementsByTagName("div")[i].removeAttribute('class');
        } else {
        document.getElementsByTagName("div")[i].setAttribute('class','test');
            document.getElementsByTagName("div")[i].style.color = "blue";
        }
    }
}


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
