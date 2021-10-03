<?php

$mysqli = new mysqli("localhost","UsrCajeroUT","C4jer0UT.2019","uta_db");

	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
		exit();
	}
	else {
		$mysqli->set_charset("utf8");
		return $mysqli;
	}

/*$mysqli = new mysqli("localhost", "root", "", "uta_db");
if ($mysqli->connect_errno) {
	echo "Fallo al contenctar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}else{
	$mysqli->set_charset("utf8");
	return $mysqli;
}*/
?>