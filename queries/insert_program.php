<?php
include("../includes/conexion.php");
$programa = $_POST['programa'];
$id_laptop = $_GET['id'];
$sql="INSERT INTO programas (id_laptop, programa) VALUE ('$id_laptop','$programa')";
if (mysqli_query($mysqli, $sql)) {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../prestamo_laptop.php?n=12&id='.$id_laptop.'"</script>';
}else {
	mysqli_close($mysqli); 
    echo'<script type="text/javascript">window.location="../prestamo_laptop.php?n=13&id='.$id_laptop.'"</script>';
}
?>