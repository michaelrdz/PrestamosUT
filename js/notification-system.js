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
      $.notify({
          title: '<strong></strong>',
          icon: 'glyphicon glyphicon-info-sign',
          message: statusMsg
        },{
          type: 'info',
          animate: {
            enter: 'animated fadeInUp',
            exit: 'animated fadeOutRight'
          },
          placement: {
            from: "top",
            align: "right"
          },
          offset: 20,
          spacing: 10,
          z_index: 1031,
        });

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