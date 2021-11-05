<?php
include("../includes/conexion.php");
$id_laptop = $_GET['id'];
$matricula = $_POST['matricula'];
$alumno = $_POST['alumno'];
$fecha_prestamo = $_POST['fecha_prestamo'];
$sql="INSERT INTO prestamos (id_laptop, matricula, alumno, fecha_prestamo) VALUE ('$id_laptop','$matricula','$alumno','$fecha_prestamo')";
if (mysqli_query($mysqli, $sql)) {
	$sql="UPDATE laptops SET estatus = 'Prestada' WHERE id_laptop = '$id_laptop' ";
	if (mysqli_query($mysqli, $sql)) {
		mysqli_close($mysqli); 
		echo'<script type="text/javascript">window.location="../consultas.php?n=16"</script>';
	}else{
		mysqli_close($mysqli); 
		echo'<script type="text/javascript">window.location="../consultas.php?n=17"</script>';
	}
}else {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../consultas.php?n=18"</script>';
}
?>