var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
function start(){

    if(p1.value  && p2.value){
       document.getElementById("open").style.display = "block";
    }
    else{
        document.getElementById("mss").style.display = "block";
    }
     
    
}
 
//  create button
 var a = document.getElementById("game");
 for(var i=0;i<9;i++)
    {
       a.innerHTML += "<button class='btn'></button>";
    }

//
//game

var play =0;
 var k =document.getElementsByClassName("btn");
 document.getElementById("game").onclick = function (event){
     if(play%2 ==0)
     {
         event.target.innerHTML = "x";
         event.target.disabled = "true";
         
     }
     else{
         event.target.innerHTML = "0";
         event.target.disabled = "true";
         
     }
     play++;
     checkwinner();
     
//     payamn

 function checkwinner(){
     var win = document.getElementById("win");
 if(k[0].innerHTML == "x" && k[1].innerHTML == "x" && k[2].innerHTML == "x"){
     win.innerHTML = "Win " + p1.value+ ":)";
     k[0].style.color = "red";
     k[1].style.color = "red";
     k[2].style.color = "red";
 }
 if(k[3].innerHTML == "x" && k[4].innerHTML == "x" && k[5].innerHTML == "x"){
     win.innerHTML = "Win " + p1.value; +":)";
     k[3].style.color = "red";
     k[4].style.color = "red";
     k[5].style.color = "red";
 }
if(k[6].innerHTML == "x" && k[7].innerHTML == "x" && k[8].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
    k[6].style.color = "red";
    k[7].style.color = "red";
    k[8].style.color = "red";
}
if(k[0].innerHTML == "x" && k[3].innerHTML == "x" && k[6].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)"; 
    k[0].style.color = "red";
    k[3].style.color = "red";
    k[6].style.color = "red";}
if(k[1].innerHTML == "x" && k[4].innerHTML == "x" && k[7].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
     k[1].style.color = "red";
     k[4].style.color = "red";
     k[7].style.color = "red";}
if(k[2].innerHTML == "x" && k[5].innerHTML == "x" && k[8].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
    k[2].style.color = "red";
     k[5].style.color = "red";
     k[8].style.color = "red";}
if(k[0].innerHTML == "x" && k[4].innerHTML == "x" && k[8].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)"; 
    k[0].style.color = "red";
     k[4].style.color = "red";
     k[8].style.color = "red";}
if(k[2].innerHTML == "x" && k[4].innerHTML == "x" && k[6].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
     k[2].style.color = "red";
     k[4].style.color = "red";
     k[6].style.color = "red";}

// other

 if(k[0].innerHTML == "0" && k[1].innerHTML == "0" && k[2].innerHTML == "0"){
     win.innerHTML = "Win " + p1.value+ ":)";
     k[0].style.color = "red";
     k[1].style.color = "red";
     k[2].style.color = "red";
 }
 if(k[3].innerHTML == "0" && k[4].innerHTML == "0" && k[5].innerHTML == "0"){
     win.innerHTML = "Win " + p1.value; +":)";
     k[3].style.color = "red";
     k[4].style.color = "red";
     k[5].style.color = "red";
 }
if(k[6].innerHTML == "0" && k[7].innerHTML == "0" && k[8].innerHTML == "0"){
    win.innerHTML = "Win " + p1.value; +":)";
    k[6].style.color = "red";
    k[7].style.color = "red";
    k[8].style.color = "red";
}
if(k[0].innerHTML == "0" && k[3].innerHTML == "0" && k[6].innerHTML == "0"){
    win.innerHTML = "Win " + p1.value; +":)"; 
    k[0].style.color = "red";
    k[3].style.color = "red";
    k[6].style.color = "red";}
if(k[1].innerHTML == "0" && k[4].innerHTML == "0" && k[7].innerHTML == "0"){
    win.innerHTML = "Win " + p1.value; +":)";
     k[1].style.color = "red";
     k[4].style.color = "red";
     k[7].style.color = "red";}
if(k[2].innerHTML == "0" && k[5].innerHTML == "0" && k[8].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
    k[2].style.color = "red";
     k[5].style.color = "red";
     k[8].style.color = "red";}
if(k[0].innerHTML == "0" && k[4].innerHTML == "0" && k[8].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)"; 
    k[0].style.color = "red";
     k[4].style.color = "red";
     k[8].style.color = "red";}
if(k[2].innerHTML == "0" && k[4].innerHTML == "0" && k[6].innerHTML == "x"){
    win.innerHTML = "Win " + p1.value; +":)";
     k[2].style.color = "red";
     k[4].style.color = "red";
     k[6].style.color = "red";}

 }
 }
 
 
 document.getElementById("new").onclick = function (event){

        
        

     location.reload();
     
 }


 


