<?php
include("../includes/conexion.php");
$id = $_POST['num'];
ini_set('date.timezone','America/Monterrey');
$fecha = date("Y-m-d");

$myclave = mysqli_query($mysqli, "SELECT * FROM laptops WHERE numero_laptop = '".$id."' LIMIT 1"); 
$nmyclave = mysqli_num_rows($myclave); 
$fila = mysqli_fetch_array($myclave);
if($nmyclave != 0){ 
	$id = $fila['id_laptop'];
	$myclave = mysqli_query($mysqli, "SELECT * FROM prestamos WHERE id_laptop = '".$id."' and prestamos.fecha_devolucion = '0000-00-00' LIMIT 1"); 
	$nmyclave = mysqli_num_rows($myclave);
	$fila = mysqli_fetch_array($myclave);
	if($nmyclave == 0){
		mysqli_close($mysqli); 
		echo'<script type="text/javascript">window.location="../devoluciones.php?num='.$id.'&n=22"</script>';
	}
}else{
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../devoluciones.php?num='.$id.'&n=21"</script>';
}

$sql="UPDATE prestamos SET fecha_devolucion='$fecha' WHERE id_laptop = '$id' and fecha_devolucion = '0000-00-00' ";
if (mysqli_query($mysqli, $sql)) {
	$sql="UPDATE laptops SET estatus = 'Disponible' WHERE id_laptop = '$id' ";
	if (mysqli_query($mysqli, $sql)) {
		mysqli_close($mysqli); 
		echo'<script type="text/javascript">window.location="../devoluciones.php?num='.$id.'&n=19"</script>';
	}else{
		mysqli_close($mysqli); 
		echo'<script type="text/javascript">window.location="../devoluciones.php?num='.$id.'&n=23"</script>';
	}
    
}else {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../devoluciones.php?num='.$id.'&n=20"</script>';
}
?>