function deleteSection(id){
  var mont=(document.getElementById(id).getElementsByClassName("deleted_value").item(0).innerHTML)
document.getElementById("tot").textContent-=mont
   var element= document.getElementById(id)
   element.parentNode.removeChild(element)
   




}
function setColor(id){
   var Element =document.getElementById(id)
   Element.setAttribute("style", "background-color: red;");

}
function plusArcticle(id,id1,id2){
   var elem = document.getElementById(id).value
   elem++
   document.getElementById(id).value=elem
  var elem1=document.getElementById(id1).textContent

  document.getElementById(id2).textContent=elem1*elem


}

function MoinArcticle(id,id1,id2){
   var elem = document.getElementById(id).value
   elem--
   document.getElementById(id).value=elem
   var elem1=document.getElementById(id1).textContent
   document.getElementById(id2).textContent=elem1*elem
  
   //document.getElementById(id3).textContent+=(elem1*elem) 
}

function calculate(id1,id2,id3,id4)
{
  var somme =0
  if(document.getElementById(id3)==null&&document.getElementById(id2)==null&&document.getElementById(id1)==null){
      document.getElementById(id4).textContent=somme
  }
  else if(document.getElementById(id3)==null&&document.getElementById(id2)==null)
  {
  var element1=Number(document.getElementById(id1).textContent)      
   somme=element1
  }
  else if(document.getElementById(id3)==null&&document.getElementById(id1)==null){
  var element2=Number(document.getElementById(id2).textContent)  
   somme= element2

  }
  else if(document.getElementById(id2)==null&&document.getElementById(id1)==null)
  {
 var  element3=Number(document.getElementById(id3).textContent) 
   somme=element3

  }
  else if(document.getElementById(id1)==null)
  {
    element2=Number(document.getElementById(id2).textContent)
   element3=Number(document.getElementById(id3).textContent)
     somme=element2+element3
     
  }
  else if(document.getElementById(id2)==null)
  {
    element1 =Number(document.getElementById(id1).textContent)
    element3=Number(document.getElementById(id3).textContent)
 
somme=element1+element3
  }
  else if (document.getElementById(id3)==null)
  {
   element1 =Number(document.getElementById(id1).textContent) 
  element2=Number(document.getElementById(id2).textContent)
     somme=element1+element2
  }
  
  else
  {
    element1 =Number(document.getElementById(id1).textContent) 
     element2=Number(document.getElementById(id2).textContent)
    element3=Number(document.getElementById(id3).textContent)
 
     somme=element1+element2+element3
   }
  

  document.getElementById(id4).textContent =somme

}