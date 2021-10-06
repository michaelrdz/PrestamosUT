<?php 
include('includes/validation.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Proyecto GPDS</title>
		<meta name="description" content="UTA - Sistema de prestamo">
		<meta name="author" content="UTA">

		<link href="css/system/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<script src="js/system/sweetalert.min.js"></script> 
		<link rel="stylesheet" type="text/css" href="js/system/sweetalert.css">
		<script src="js/system/jquery.min.js"></script>
		
		<link href="css/jquery.dataTables.min.css" rel="stylesheet">
		<script src="js/jquery.dataTables.min.js"></script>
		<script>
			$(document).ready(function() {
				$('#table-uta').DataTable( {
					"scrollY": 350,
					"scrollX": true
				} );
			} );
			function deleteUser(user, id){
				swal({   
				title: "¿Está usted seguro?",   
				text: "Se eliminará el usuario " + user,   
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
						url: "queries/delete_user.php",
						data: { "id" : id
								},
							success: function(data){
									window.location="usuarios.php?n=" + data; 
								  }
							 });
					} else {     
					swal("Cancelado", "El usuario no se eliminó", "error");   
					} 
				});
			}
			function changeUser(user, password, id){
				$("#change-container").attr("hidden", false);
				$("#insert-container").attr("hidden", true);
				$("#c_usuario").val(user);
				$("#c_password").val(password);
				$("#c_id").val(id);
			}
			function changeUserCancel(){
				$("#change-container").attr("hidden", true);
				$("#insert-container").attr("hidden", false);
				$("#c_usuario").val('');
				$("#c_password").val('');
				$("#c_id").val('');
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
									<form class="form-horizontal" role="form" method="post" action="queries/insert_user.php">
										<div class='form-group'>
											<label for='usuario' class="col-sm-2 control-label">
												USUARIO
											</label>
											<div class="col-sm-9">
												<input type='text' name='usuario' class='form-control' id='usuario' />
											</div>
										</div>
										<div class='form-group'>
											<label for='password' class="col-sm-2 control-label">
												CONTRASEÑA
											</label>
											<div class="col-sm-9">
												<input type='text' name='password' class='form-control' id='password' />
											</div>
										</div>
										<div class='modal-footer'>
											<button type='submit' class='btn btn-success'>
												Guardar
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
