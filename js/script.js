var section = document.getElementById('subscribew');
var div1= document.getElementById('firstfooter')
var div2= document.getElementById('secondfooter')
var div3= document.getElementById('thirdfooter')
var display=0;
function hideshow1(){
 if(display==1){
    section.style.display='block';
    display=0;
 }
 else{
    section.style.display='none';
    display=1;
 }
} 

function hideshow2(){
    if(display==1){
       div1.style.display='block';
       display=0;
    }
    else{
       div1.style.display='none';
       display=1;
    }
   } 

   function hideshow3(){
    if(display==1){
       div2.style.display='block';
       display=0;
    }
    else{
       div2.style.display='none';
       display=1;
    }
   } 

   function hideshow4(){
    if(display==1){
       div3.style.display='block';
       display=0;
    }
    else{
       div3.style.display='none';
       display=1;
    }
   } 