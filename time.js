var myVar = setInterval(myTimer, 1000);
var timer = 5;
function myTimer() {
   document.querySelector("#timer").innerHTML = timer;
    if(timer === 0) {
        stopInterval();
    }
    timer --;
}

function stopInterval(){
    clearInterval(myVar);
    alert("HAPPY BIRTHDAY");
    document.querySelector("#timer").innerHTML = "YOU ARE 13";
}


function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(xhttp.responseText);
        }
        if(this.readyState === 1) {
            console.log(xhttp);
        }
    }
    xhttp.onprogress = function() {
        console.log('progress',xhttp.readyState)
    }
    xhttp.onload = function() {
        console.log('load',xhttp.readyState)
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
    xhttp.send();
}
getData();