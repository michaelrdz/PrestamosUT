// Empty JS for your own code to be here
function validacion() {
	var email = document.getElementById("email").value;
	var p1 = document.getElementById("password").value;
	var p2 = document.getElementById("password2").value;
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if ( !expr.test(email) ) {
		// Si no se cumple la condicion...
		sweetAlert("Error", "La dirección de correo " + email + " es incorrecta.", "error");
		return false;
	}
	
	var espacios = false;
	var cont = 0;
	 
	while (!espacios && (cont < p1.length)) {
	  if (p1.charAt(cont) == " ")
		espacios = true;
	  cont++;
	}
	 
	if (espacios) {
		sweetAlert("Error", "La contraseña no puede contener espacios en blanco", "error");
		return false;
	}
	
	if (p1.length == 0 || p2.length == 0) {
		sweetAlert("Error", "Los campos de la contraseña no pueden quedar vacios", "error");
		return false;
	}
	
	if (p1 != p2) {
		sweetAlert("Error", "Las contraseñas deben de coincidir", "error");
		return false;
	}
	  
	 
  return true;
}