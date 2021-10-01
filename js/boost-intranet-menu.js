/*
   SANOH-MX S.A. DE C.V.
   Unidad:             boost-intranet-menu.js
   FechaCreación:      13.Junio.2018
   Autor:              daniel.pasillas
   UltimaModificación: 13.Junio.2018
   ModificadoPor:      daniel.pasillas
*/


var enableExecution = false;

(function(){

  window.onload = function(){
    this.addEventListener("mousemove", function(e){
     if(e.pageX <= 100 && !document.getElementById("css-menu") && enableExecution){
      AddStyleToDom();
      ShowMenu();
     }
     else if(e.pageX > 100){
      hideMenu();
     }
    })
  }

})();

function AddStyleToDom()
{

  var link  = document.createElement('link');
  link.id = 'css-menu';
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'http://sanoh-mx/css/menu-style.css';
  link.media = 'all';

  var _head = document.head;

  _head.append(link);
}

function ShowMenu()
{
   var _bodyContent = document.createElement("div");
   _bodyContent.setAttribute("class", "san-background-container");
   document.body.appendChild(_bodyContent);
}

function hideMenu(){
  document.querySelector("#css-menu").remove();
  document.querySelector(".san-background-container").remove();
}