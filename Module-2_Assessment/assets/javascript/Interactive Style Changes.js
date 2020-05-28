// Interactive Style Changes 

id="main heading" onmouseover= "changeHBackground(text)" onmouseout= "returnHBackground(text)"
id="main p" onmouseover= "changePStuff(text2)" onmouseout= "returnPStuff(text2)"
id="guesses" onmouseover= "changeGStuff(text3)" onmouseout= "returnGStuff(text3)"
id="guesses 2" onmouseover= "changeG2Stuff(text4)" onmouseout= "returnG2Stuff(text4)"

function changeHBackground ()  {

    var text= document.getElementById("main heading").style.backgroundColor= "gold";
    var text= document.getElementById("main heading").style.fontWeight="bold";
    var text= document.getElementById("main heading").style.fontStyle= "italic";
    var text= document.getElementById("main heading").style.color= "purple";
  
  }
  
  function returnHBackground ()  {
  
    var text= document.getElementById("main heading").style.backgroundColor= "";
    var text= document.getElementById("main heading").style.fontWeight="";
    var text= document.getElementById("main heading").style.fontStyle= "";
    var text= document.getElementById("main heading").style.color= "";
  
  
  }
  
  function changePStuff ()  {
  
   var text2= document.getElementById("main p").style.backgroundColor= "yellow";
   var text2= document.getElementById("main p").style.fontSize="xx-large";
   var text2= document.getElementById("main p").style.fontWeight="bold";
   var text2= document.getElementById("main p").style.fontStyle="oblique";
   var text2= document.getElementById("main p").style.color= "magenta";
  
  }
  
  function returnPStuff ()  {
   var text2= document.getElementById("main p").style.fontSize="";
   var text2= document.getElementById("main p").style.fontWeight="";
   var text2= document.getElementById("main p").style.fontStyle="";
   var text2= document.getElementById("main p").style.color= "";
    
  }
  
  function changeGStuff ()  {
  
    var text3= document.getElementById("guesses").style.backgroundColor= "red";
    var text3= document.getElementById("guesses").style.fontSize="xx-large";
    var text3= document.getElementById("guesses").style.fontWeight="bold";
    var text3= document.getElementById("guesses").style.fontStyle="italic";
    var text3= document.getElementById("guesses").style.color= "purple";
  
  
  }
  
  function returnGStuff ()  {
    var text3= document.getElementById("guesses").style.backgroundColor= "";
    var text3= document.getElementById("guesses").style.fontSize="";
    var text3= document.getElementById("guesses").style.fontWeight="";
    var text3= document.getElementById("guesses").style.fontStyle="";
    var text3= document.getElementById("guesses").style.color= "";
  
  }
  
  function changeG2Stuff ()  {
  
    var text4= document.getElementById("guesses 2").style.backgroundColor= "blue";
    var text4= document.getElementById("guesses 2").style.fontSize="200%";
    var text4= document.getElementById("guesses 2").style.fontWeight="bold";
    var text4= document.getElementById("guesses 2").style.fontSize="xx-large";
    var text4= document.getElementById("guesses 2").style.fontStyle="oblique";
    var text4= document.getElementById("guesses 2").style.color= "purple";
  
  }
  
  function returnG2Stuff ()  {
    var text4= document.getElementById("guesses 2").style.backgroundColor= "";
    var text4= document.getElementById("guesses 2").style.fontSize="";
    var text4= document.getElementById("guesses 2").style.fontWeight="";
    var text4= document.getElementById("guesses 2").style.fontStyle="";
    var text4= document.getElementById("guesses 2").style.color= "";
  
  }