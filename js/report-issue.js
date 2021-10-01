/*
   SANOH-MX S.A. DE C.V
   Unidad: report-issue.js  (Feedbacks or issues reports withing Sanoh WebModules)
   Fecha:  16.Marzo.2018
   Autor:  daniel.pasillas
   Modificado: daniel.pasillas
   Version: 1.2.  //NOTICE: If there is a change, please fill up the version, date update, and the autor.
   Fecha_Mod : 09.Mayo.2018
   Descripción: Funciones principales para gestionar la solicitud de reportes y fallas en las aplicaciones de intranet de sanoh.
   				User are able to report a problem by using this option. The issue report will be send to the IT email address, 
   				so that the Developers and Support staff from the IT area will know the drill.

*/

(function() {
    var FX = {
        easing: {
            linear: function(progress) {
                return progress;
            },
            quadratic: function(progress) {
                return Math.pow(progress, 2);
            },
            swing: function(progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function(progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function(progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function(progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function(progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function(options) {
            var start = new Date;
            var id = setInterval(function() {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress == 1) {
                    clearInterval(id);
                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeOut: function(element, options) {
            var to = 1;
            this.animate({
                duration: options.duration,
                delta: function(progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function(delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeIn: function(element, options) {
            var to = 0;
            this.animate({
                duration: options.duration,
                delta: function(progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function(delta) {
                    element.style.opacity = to + delta;
                }
            });
        }
    };
    window.FX = FX;
})()

/*
function serialize (form) {
    if (!form || form.nodeName !== "FORM") {
            return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'tel':
                    case 'email':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }                                               
                        break;
                }
                break;
                case 'file':
                break; 
            case 'TEXTAREA':
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                    break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
            }
        }
    return q.join("&");
}
*/


function Closing()
{
    FX.fadeOut(document.getElementById('sn-screenshot-container'), {
        duration: 200,
        complete: function() {
            document.getElementById('sn-screenshot-container').remove();
        }
    });    
}
//------------------------------


function AjaxSend(form)
{
   var xhttp = new XMLHttpRequest();
   xhttp.open("POST", "http://sanoh-mex/webservices/webservice/sendemail", true);
   xhttp.responseType = 'json';
   xhttp.onload = function(){
      
      var jsonResponse = xhttp.response;

      final(jsonResponse);

   };

   xhttp.send(form);
}
//------------------------------

function final(jsonResponse)
{

    console.log(jsonResponse);
  var newContent = '<div style="width:100%;padding:20px;text-align:center;"><h2>'+jsonResponse.messageheader+'</h2><strong>Folio: '+jsonResponse.folio+'</strong><p>'+jsonResponse.messagebody+'</p><hr><button class="btn btn-primary" onclick="Closing();">Hecho</button></div>';

  document.querySelector(".sn-header-form-issue").innerHTML = '';

  //remove the current content after the information is sent.
  document.querySelector("#form-container-issue").innerHTML = newContent;

}
//------------------------------

/*
*  Once that the issue was properly sent, we will display a new interface frame for noticing users that their issue report 
*  was successfully generated.
*/

function SendForm()
{

   var _description = document.getElementById("issue-description").value;
   var _urlResource = document.getElementById("issue-url").value;

   if(_description.trim() && _urlResource.trim())
   {

    //Disable submit button.
    document.querySelector(".sanmex-send-issue").innerHTML = "Espere por favor...";
    document.querySelector(".sanmex-send-issue").disabled = true;
      
     var  _form = document.getElementById('form-issue-report');

     var _serialize = new FormData(_form);

     //Attach file
     _serialize.append("extra", null);


     if(document.getElementById("include-screenshot").checked)
     {

        //We will append the src from img only if the checkbox is checked.
        var _imgScreenShot = document.getElementById("img-screen-shot").src;

        _serialize.append("screenshot", _imgScreenShot);

     }
     else
     {
         _serialize.append("screenshot", null);
     }

     AjaxSend(_serialize);
     
   }
   else
   {
      return;
   }
}
//------------------------------


window.addEventListener("load", function(){

	//'use strict';

   //SetUp the source for screenshot.
   setUpCaptureScreenShotOnReady();

   //Launch Form Issue Report
	document.getElementById("sanmex-gen-issue-report").addEventListener("click", function(){	

      html2canvas(document.querySelector("html")).then(canvas => {

         //Check if that alrea
         if(!document.getElementById("sn-screenshot-container"))
         {
               createUXComponents(canvas.toDataURL());
         }
      });
      
	});
   //------------------------------
});
//-------------------------------


function createUXComponents(imgDataScreenShot)
{

   //Overlay
   var _overlayIssue = document.createElement("div");
   _overlayIssue.setAttribute("id", "sn-screenshot-container");

   //Body Content.
   var _bodyContent = document.createElement("div");
   _bodyContent.setAttribute("id", "sn-body-form");
   _bodyContent.setAttribute("class", "modal-content");

   var contentHtml = getFormToIssue(imgDataScreenShot);
   
   //Create IMG.
   /*var _imgScreenShot = document.createElement("IMG");
   _imgScreenShot.setAttribute("src", imgDataScreenShot);
   _imgScreenShot.setAttribute("width", "120px");
   _imgScreenShot.setAttribute("height", "120px");*/

   _bodyContent.innerHTML = contentHtml;
   //_bodyContent.appendChild(_imgScreenShot);

   /*var _strFooter = '';
   var _footer = document.createElement("div");
   _footer.setAttribute("class", "sn-footer-form-issue");
   _footer.innerHTML = _strFooter;
   */
  

   //Append footer
   //_bodyContent.appendChild(_footer);

   _overlayIssue.appendChild(_bodyContent);

   
   //Append img to main container.
   //_bodyContent.appendChild(_imgScreenShot);
   document.body.appendChild(_overlayIssue);   
}
//-------------------------------


function detaileImg(value)
{
   if(value === 1)
   {
      //Increase image

      document.getElementById("img-screen-shot").style.transition= '0.4s all';
      document.getElementById("img-screen-shot").style.width= '300px';
      document.getElementById("img-screen-shot").style.marginLeft = '-80px';
   }
   else
   {  

      document.getElementById("img-screen-shot").style.transition= '0.4s all';
      document.getElementById("img-screen-shot").style.width= '200px';
      document.getElementById("img-screen-shot").style.marginLeft = '0';
   }
}
//-------------------------------


function getFormToIssue(imgDataScreenShot)
{
   var currentURL = window.location.origin + window.location.pathname;

   var htmlContent = '<div class="sn-header-form-issue"><h4> ¿Cuál es el problema?</h4><small>Por favor agregue cuantos detalles sean necesarios en la descripción del problema.</small></div><br><div id="form-container-issue"><form id="form-issue-report" onsubmit="return false;" action="http://sanoh-mx/api/services/report-issue.php" enctype="multipart/form-data" method="POST">'+
                     '<div class="form-group"><textarea name="descripcion" class="form-control" id="issue-description" cols="10" placeholder="Describe el problema..." rows="5" autofocus="true" required></textarea></div><div class="form-group"><label for="">URL</label><input type="text" name="url" id="issue-url" class="form-control" title="Changhe the resource if needed" value="'+currentURL+'" required></div><br><div class="form-group"><div class="row"><div id="left-img-container" class="col-md-4"><label><input type="checkbox" id="include-screenshot" name="checkbox" value="value"> &nbsp;Incluir screenshot en reporte.</label></div><div onmouseover="detaileImg(1)" id="right-img-container" onmouseleave="detaileImg(0)" class="col-md-8 right-img-container"><img style="cursor:pointer;box-shadow:1px 0px 3px rgba(0,0,0,0.4);" width="200" id="img-screen-shot" src="'+imgDataScreenShot+'"/></div></div></div><div class="form-group"><button class="btn btn-primary btn-sm sanmex-send-issue" onclick="SendForm();" type="submit"> Enviar</button><button onclick="Closing();" class="btn btn-default btn-sm" type="button" id="issue-btn-cancel">Cancelar</button></div></form></div>';

   return htmlContent;
}
//-------------------------------

function setUpCaptureScreenShotOnReady()
{
   //This function allows us to load a script from the html2canvas library.
   //

   //html2canvas for screenshots. https://html2canvas.hertzen.com/
   var _captureSource = 'https://html2canvas.hertzen.com/dist/html2canvas.js';

   //Create the script container.
   var _script = document.createElement('script');

   //Set source to the created script.
   _script.src = _captureSource;

   //Append the script to the document (Head).
   document.head.append(_script);
}
//-------------------------------

