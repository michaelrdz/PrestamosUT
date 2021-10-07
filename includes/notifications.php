<?php  
if(isset($_GET['n'])){
	switch ($_GET['n']) {
		case 0:
			echo '<script>sweetAlert("Lo sentimos", "Registre los datos nuevamente", "error");</script>';
			break;
		case 1:
			echo '<script>sweetAlert("OK", "Usuario registrado correctamente", "success");</script>';
			break;
		case 2:
			echo '<script>sweetAlert("OK", "Usuario eliminado", "success");</script>';
			break;
		case 3:
			echo '<script>sweetAlert("Lo sentimos", "Intente eliminar el usuario nuevamente", "error");</script>';
			break;
		case 4:
			echo '<script>sweetAlert("OK", "Cambio exitoso", "success");</script>';
			break;
		case 5:
			echo '<script>sweetAlert("Lo sentimos", "Intente cambiar el usuario nuevamente", "error");</script>';
			break;
		case 6:
			echo '<script>sweetAlert("OK", "Laptop registrada correctamente", "success");</script>';
			break;
		case 7:
			echo '<script>sweetAlert("Lo sentimos", "Registre los datos nuevamente", "error");</script>';
			break;
		case 8:
			echo '<script>sweetAlert("OK", "Cambio exitoso", "success");</script>';
			break;
		case 9:
			echo '<script>sweetAlert("Lo sentimos", "Intente cambiar los datos nuevamente", "error");</script>';
			break;
		case 10:
			echo '<script>sweetAlert("OK", "Laptop eliminada", "success");</script>';
			break;
		case 11:
			echo '<script>sweetAlert("Lo sentimos", "Intente eliminar la laptop nuevamente", "error");</script>';
			break;
		case 12:
			echo '<script>sweetAlert("OK", "Programa añadido", "success");</script>';
			break;
		case 13:
			echo '<script>sweetAlert("Lo sentimos", "Intente añadir el programa nuevamente", "error");</script>';
			break;
		case 14:
			echo '<script>sweetAlert("OK", "Programa eliminado", "success");</script>';
			break;
		case 15:
			echo '<script>sweetAlert("Lo sentimos", "Intente eliminar el programa nuevamente", "error");</script>';
			break;
		case 16:
			echo '<script>sweetAlert("OK", "El prestamo se realizó con éxito", "success");</script>';
			break;
		case 17:
			echo '<script>sweetAlert("Lo sentimos", "No se pudo cambiar el estatus de la laptop", "error");</script>';
			break;
		case 18:
			echo '<script>sweetAlert("Lo sentimos", "No se pudo realizar el prestamo", "error");</script>';
			break;
		case 19:
			echo '<script>sweetAlert("OK", "Devolución registrada con éxito", "success");</script>';
			break;
		case 20:
			echo '<script>sweetAlert("Lo sentimos", "Intente hacer la devolución nuevamente", "error");</script>';
			break;
		case 21:
			echo '<script>sweetAlert("Lo sentimos", "El número de laptop que ingreso no existe", "error");</script>';
			break;
		case 22:
			echo '<script>sweetAlert("Lo sentimos", "La laptop no se encuentra prestada", "error");</script>';
			break;
		case 22:
			echo '<script>sweetAlert("Lo sentimos", "El cambio de estatus no se realizó correctamente", "error");</script>';
			break;
	}
}
?>