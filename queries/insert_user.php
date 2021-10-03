<?php
//Codigo crear usuario
include("../includes/conexion.php");
$usuario = $_POST['usuario'];
$password = $_POST['password'];

$sql="INSERT INTO usuarios (usuario, password) VALUE ('$usuario','$password')";
if (mysqli_query($mysqli, $sql)) {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../usuarios.php?n=1"</script>';
}else {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../usuarios.php?n=0"</script>';
}
?>