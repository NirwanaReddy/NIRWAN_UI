document.getElementById("addText").innerHTML = "<p>Praveen</p>"






function test() {
    console.log('added event');
}
function changeColor() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "NEW";
    btn.addEventListener("click",function(){
        test();
    });





document.getElementsByTagName("body")[0].appendChild(btn);

    for(var i=0;i<document.getElementsByTagName("div").length;i++) {
        if(document.getElementsByTagName("div")[i].style.color == "red"){
             document.getElementsByTagName("div")[i].style.color = "black";
             document.getElementsByTagName("div")[i].removeAttribute('class');
        } else {
        document.getElementsByTagName("div")[i].setAttribute('class','test');
            document.getElementsByTagName("div")[i].style.color = "red";
        }
    }
}








function add(){
    var buttons = document.getElementsByTagName("BUTTON");
    console.log(buttons);
    for(var i=0;i<buttons.length;i++){
       if(buttons[i].innerHTML === 'TEST')
          break;
    }
    if( i === buttons.length) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "TEST";
    btn.setAttribute('class','test');
    btn.addEventListener("click",function(){
        test();
    });
    document.getElementsByTagName("body")[0].appendChild(btn);
    } else {
        buttons[buttons.length-1].remove();
    }



function remove(){
    console.log(document.querySelector("body > .test"))
    for(var i=0;i< document.querySelectorAll(".child > a").length; i++){
        document.querySelectorAll(".child > a")[i].style.color = "red";
    }




    