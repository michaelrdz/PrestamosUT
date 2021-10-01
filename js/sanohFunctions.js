/*
   SANOH-MX S.A. DE C.V.
   Unidad:             sanohFunctions.js
   FechaCreación:      26.Enero.2017
   Autor:              daniel.pasillas
   UltimaModificación: 27.Enero.2018
   ModificadoPor:      daniel.pasillas

   <--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
   Descripción: Dentro del presente archivo se definen las funciones generales de Javascript.
                 Estas funciones y/o rutinas pueden ser utilizadas desde cualquier aplicación,
                      solamente se tiene que agregar el vínculo a la misma.
*/




 $(function () {

     setTimeout(showMessage(), 3500);

      $(document).on("click", "#close-notifier", function () {
          $(this).parent().parent().slideToggle("fast");
          setTimeout(function () {
              document.getElementById("main-notifier").remove();
          }, 100);
      });
      //---------------------------------------------------

      $(".net-link").bind("click", function(e){
          e.preventDefault();
          var self = $(this);

         // _dataToken = self.attr("data-token");
          _returnUrl = self.attr("data-ref");

           //Show loader.
          createTopLoader("Cargando...");
          console.log("Validating sessions...");

          //We will make an ajax request to check if session is still activated.
          $.ajax({
            url: 'http://sanoh-mx/includes/sessionValidate.php',
            type: 'post',
            cache: false,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response){
              console.log(response.status);
              if(response.status)
              {

                window.location.href = _returnUrl;
              }
              else
              {
                
                window.location.href = 'http://sanoh-mx/security/';
              }
            },
            error: function(xhr, r, h){
              console.log(xhr.responseText);
            }
          });

      });
      //---------------------------------------------------
  });


function createTopLoader(message)
{
  var _element = document.createElement("div");

  _element.style.cssText = "font-weight: bold;display:block;position:fixed; top:0; box-shadow:1px 0px 3px rgba(0,0,0,0.4);margin:0 auto;padding:10px;right:0; left:0; width:100px; border-radius:5px; background:#ffc;";
  _element.textContent = message;

  document.body.appendChild(_element);

}
//---------------------------------------------------


function showMessage(){
  //-----------------------------------------------//
  //This function get the value after reload the page.
  //-----------------------------------------------//

  //Modo estricto para mostrar más detalles e informes por consola.
  'use strict';

  // Checar si el almacenamiento localStorage es soportado por el navegador.
  if (typeof(Storage) !== "undefined") {

    //Obtenemos el valor de estatus.
    var statusMsg = localStorage.getItem("msg");

    if(statusMsg !== null)
    {

      //Mostramos el mensaje de la operación
      var _divMain = document.createElement("div");   //Main container
      var _divHeader = document.createElement("div"); //Header from notifier container
      var _divBody = document.createElement("div");   //Body from notifier container
      var _inSpan = document.createElement("span");   //Icon for closing the notifier popup

      _divMain.setAttribute("id", "main-notifier");

      _inSpan.setAttribute("id", "close-notifier");
      //_inSpan.textContent = "X";
      _divBody.setAttribute("id", "body-notifier");
      _divBody.textContent = statusMsg;

      _divMain.setAttribute("class", "notifier");
      _divHeader.setAttribute("class", "notifierHeader");
      _inSpan.setAttribute("class", "notifierClosingIcon");

      _divHeader.appendChild(_inSpan);

      _divMain.appendChild(_divHeader);
      _divMain.appendChild(_divBody);

      $(_divMain).hide().appendTo(document.body);
      $(_divMain).slideToggle("fast");

      setTimeout(function () {
          $(_divMain).slideToggle("fast");
      }, 5600);

      //Limpiar todos los mensajes contenidos en el localStorage.
      localStorage.removeItem("msg");
    }
  } 
  else
  {
    //En caso de que no soporte el almacenamiento, se mostrara el siguiente mensaje por consola.
    console.log("El proceso se completo correctamente.");
  }

}
//-----------------------------------------------------------------------

function showNotify(msg){
  //-----------------------------------------------//
  //This function get the value after reload the page.
  //-----------------------------------------------//

  //Modo estricto para mostrar más detalles e informes por consola.
  'use strict';

    var htmlContentExist = $("#main-notifier").length;
    
    //Check if the component already does exist.
    if(htmlContentExist == 0)
    {
      //Mostramos el mensaje de la operación
      var _divMain = document.createElement("div");   //Main container
      var _divHeader = document.createElement("div"); //Header from notifier container
      var _divBody = document.createElement("div");   //Body from notifier container
      var _inSpan = document.createElement("span");   //Icon for closing the notifier popup

      _divMain.setAttribute("id", "main-notifier");

      _inSpan.setAttribute("id", "close-notifier");
      //_inSpan.textContent = "X";
      _divBody.setAttribute("id", "body-notifier");
      _divBody.textContent = msg;

      _divMain.setAttribute("class", "notifier");
      _divHeader.setAttribute("class", "notifierHeader");
      _inSpan.setAttribute("class", "notifierClosingIcon");

      _divHeader.appendChild(_inSpan);

      _divMain.appendChild(_divHeader);
      _divMain.appendChild(_divBody);

      $(_divMain).hide().appendTo(document.body);
      $(_divMain).slideToggle("fast");

      //console.log(htmlContentExist);
      setTimeout(function () {
          $(_divMain).slideToggle("fast");
          $(_divMain).fadeOut(function(){$(this).remove()});
      }, 5000);
    }
    else
    {
      return;
    }
}
//-----------------------------------------------------------------------


//Overlay menu apps for intranet 2.0.
//This functions allows users to navigate among the differents apps inside intranet 2.0.
//It is shown when the user aims to the left side from the application.
//To see more about it, please have a look to the item 
(function(){

  'use strict';
  //Pendiente...
});
//-----------------------------------------------------------------------
