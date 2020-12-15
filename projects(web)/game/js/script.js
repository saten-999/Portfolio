//  create button
var i,k;
 var game = document.getElementById("game");
 for(i=0;i<16;i++)
    {
       game.innerHTML += "<button class='btn'></button>";
    }
    var btn=document.getElementsByClassName("btn");
    for(i=0;i<16;i++)
    {
        btn[i].innerHTML +="<p class='p'></p>";
        btn[i].innerHTML +="<img class='photo'>";
        
    }
    var img=document.getElementsByClassName("photo");
    var p=document.getElementsByClassName("p");
    var a0=0,a1=0,a2=0,a3=0;
    var arr=[];
    for(i=0;i<16;i++)
    { 
        k = Math.floor(Math.random() * 4);
        
        p[i].innerHTML = k;
        if(k==0){
            img[i].setAttribute("src", "img/1.jpg" ); 
            a0++;
        }
            
        if(k==1)
            {

                img[i].setAttribute("src", "img/2.jpg" );
                a1++;
            }
        if(k==2)
            {
                img[i].setAttribute("src", "img/3.jpg" );
                a2++;
            }
        if(k==3)
            {
                img[i].setAttribute("src", "img/4.jpg" );
                a3++;
            }
            if(i==15 ){
                if(a0%2 !=0){
                    img[i].setAttribute("src", "img/1.jpg" ); 
                }
                if(a1%2 !=0){
                    img[i].setAttribute("src", "img/2.jpg" ); 
                }
                if(a2%2 !=0){
                    img[i].setAttribute("src", "img/3.jpg" ); 
                }
                if(a3%2 !=0){
                    img[i].setAttribute("src", "img/4.jpg" ); 
                }
            }
    }   
    console.log(a3);

//game
var y,z,y1,z1;
var play=0,count=0;
 var k1 =document.getElementsByClassName("photo");
 document.getElementById("game").onclick = function (event){
     if(play%2 ==0)
     {
         y=event.target.children[0].innerHTML; //p-i arjeq@
         event.target.children[1].style.display="block";//nkar@
         y1=event.target;
         y1.children[1].style.display="block";         
     }
     else{
        z=event.target.children[0].innerHTML;
        z1=event.target;
        z1.children[1].style.display= "block";

        document.getElementById("count").innerHTML=++count;
        check();
       
         
     }
    //  check();
     play++;
     
     
//     payamn

 function check(){
     
     if (y==z){

     }
     else{
        setTimeout(function(){ 
            z1.children[1].style.display="none";
            y1.children[1].style.display="none";
        }, 500);
        
     }
     

 }
 }
 

 


