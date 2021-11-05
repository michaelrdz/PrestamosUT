<?php 
include('includes/validation.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Alta de bienes GPDS</title>
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
			function deletePrograma(programa, id){
				swal({   
				title: "¿Está usted seguro?",   
				text: "Se eliminará el programa " + programa,   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Confirmar",   
				cancelButtonText: "Cancelar",   
				closeOnConfirm: false,   
				closeOnCancel: false }, 
				function(isConfirm){  
					if (isConfirm) {  
						$.ajax({
						type: "POST",
						url: "queries/delete_programa.php",
						data: { "id" : id
								},
							success: function(data){
									window.location="prestamo_laptop.php?id=<?php echo $_GET['id'];?>&n=" + data; 
								  }
							 });
					} else {     
					swal("Cancelado", "El programa no se eliminó", "error");   
					} 
				});
			}
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
					<div class="col-md-2">
					</div>
					<div class="col-md-8">
						<div class="jumbotron well">
							<p>
								<div class="form-group" id="insert-container">
									<?php
										include("includes/conexion.php");
										$sql2="SELECT * FROM laptops WHERE id_laptop = '".$_GET['id']."'";
										$result = mysqli_query($mysqli, $sql2);
										while ($var= mysqli_fetch_array($result)){ ?>
											<form class="form-horizontal" role="form" method="POST" action="queries/lend_laptop.php?id=<?php echo $_GET['id'];?>">
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														N° DE LAPTOP
													</label>
													<div class="col-sm-9">
														<input type='text' readonly value="<?php echo $var['numero_laptop'];?>" class='form-control' required />
													</div>
												</div>
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														N° DE SERIE
													</label>
													<div class="col-sm-9">
														<input type='text' readonly value="<?php echo $var['numero_serie'];?>" class='form-control' required />
													</div>
												</div>
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														MARCA
													</label>
													<div class="col-sm-9">
														<input type='text' readonly value="<?php echo $var['marca'];?>" class='form-control' required />
													</div>
												</div>
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														FECHA DE PRESTAMO
													</label>
													<div class="col-sm-9">
														<input type="text" name="fecha_prestamo" id="fecha_prestamo" placeholder="YYYY-MM-DD" class='form-control' required />
														<script>
														$(function() {
														  $('#fecha_prestamo').daterangepicker({
															"singleDatePicker": true,
															"locale": {
																"format": "YYYY-MM-DD",
																"firstDay": 1
															},
														}, function(start, end, label) {
														  
														});
														});
														</script>
													</div>
												</div>
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														MATRÍCULA
													</label>
													<div class="col-sm-9">
														<input type='text' name='matricula'  class='form-control' required />
													</div>
												</div>
												<div class='form-group'>
													<label  class="col-sm-3 control-label">
														ALUMNO
													</label>
													<div class="col-sm-9">
														<input type='text' name='alumno'  class='form-control' required />
													</div>
												</div>
												<div class='modal-footer'>
													<button type='submit' class='btn btn-success'>
														Prestar equipo
													</button>
												</div>
											</form>
										<?php 
										} 
									?>
								</div>
							</p>
							<p>
								<div class="form-group" id="insert-container">
									<form class="form-horizontal" role="form" method="POST" action="queries/insert_program.php?id=<?php echo $_GET['id'];?>">
										<div class='form-group'>
											<label  class="col-sm-3 control-label">
												PROGRAMA
											</label>
											<div class="col-sm-9">
												<input type='text' name='programa' class='form-control' required />
											</div>
										</div>
										<div class='modal-footer'>
											<button type='submit' class='btn btn-success'>
												Añadir programa
											</button>
										</div>
									</form>
								</div>
							</p>
						</div>
					</div>
					<div class="col-md-2">
					</div>
				</div>
			</p>
		</div>
		<script src="js/bootstrap.min.js"></script>
		<img id="background_logo" style="" src="img/logo_menu.png">
	</body>
	<?php include('includes/notifications.php');?>
</html>
