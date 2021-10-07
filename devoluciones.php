<?php 
include('includes/validation.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>GPDS</title>
		<meta name="description" content="UTA - Sistema de prestamo">
		<meta name="author" content="UTA">

		<link href="css/system/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<script src="js/system/sweetalert.min.js"></script> 
		<link rel="stylesheet" type="text/css" href="js/system/sweetalert.css">
		<script src="js/system/jquery.min.js"></script>
		
		<link href="css/jquery.dataTables.min.css" rel="stylesheet">
		<script src="js/jquery.dataTables.min.js"></script>
		
		<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
	
		<script>
			$(document).ready(function() {
				$('#table-uta').DataTable( {
					"scrollY": 350,
					"scrollX": true
				} );
			} );
		</script>
	</head>
	<body style="background-color:green;">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12" style="padding-top:50px;">
					<?php include("menu.php");?>
				</div>
			</div>
			<p>
				<div class="row">
					<div class="col-md-1">
					</div>
					<div class="col-md-10">
						<div class="jumbotron well">
							<p>
								<div class="form-group" id="insert-container">
									<form class="form-horizontal" role="form" method="POST" action="queries/return_laptop.php">
										<div class='form-group'>
											<label for='num' class="col-sm-3 control-label">
												NÚMERO LAPTOP
											</label>
											<div class="col-sm-9">
												<input type='text' name='num' class='form-control' id='num' required />
											</div>
										</div>
										<div class='modal-footer'>
											<button type='submit' class='btn btn-success'>
												Devolución
											</button>
										</div>
									</form>
								</div>
							</p>
							<table id="table-uta" class="display nowrap" cellspacing="0" width="100%">
								<thead>
									<tr>
										<th>Número de laptop</th>
										<th>Número de serie</th>
										<th>Marca</th>
										<th>Modelo</th>
										<th>Fecha de prestamo</th>
										<th>Fecha de devolución</th>
										<th>Estatus</th>
									</tr>
								</thead>
								<tbody>
									<?php
										if(isset($_GET['num'])&&$_GET['num']!=''){
											include("includes/conexion.php");
											$sql2="SELECT * FROM prestamos INNER JOIN laptops ON prestamos.id_laptop = laptops.id_laptop WHERE laptops.id_laptop = '".$_GET['num']."'";
											$result = mysqli_query($mysqli, $sql2);
											while ($var= mysqli_fetch_array($result)){ ?>
												<tr>
													<td style='text-align:center;'><?php echo $var['numero_laptop'];?></td>
													<td style='text-align:center;'><?php echo $var['numero_serie'];?></td>
													<td style='text-align:center;'><?php echo $var['marca'];?></td>
													<td style='text-align:center;'><?php echo $var['modelo'];?></td>
													<td style='text-align:center;'><?php echo $var['fecha_prestamo'];?></td>
													<td style='text-align:center;'><?php echo $var['fecha_devolucion'];?></td>
													<td style='text-align:center;'><?php if($var['fecha_devolucion']=='0000-00-00'){echo 'Sin devolver';}else{echo 'Devuelta';}?></td>
												</tr>
										<?php } }
									?>
								</tbody>
							</table>
						</div>
					</div>
					<div class="col-md-1">
					</div>
				</div>
			</p>
		</div>
		<script src="js/bootstrap.min.js"></script>
		<img id="background_logo" style="" src="img/logo_menu.png">
	</body>
	<?php include('includes/notifications.php');?>
</html>
