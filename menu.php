<script> 
	$(window).resize(function(){
	var alto=$(window).height();
	var ancho=$(window).width();
	if(ancho>770){
		$("#menu-resp").html('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Menú<strong class="caret"></strong></a><ul class="dropdown-menu"><li><a href="#">opciones</a></li></ul></li><li style="padding-left:14px;"><a href="includes/logout.php" style="padding:1px; line-height: 47px;"><strong style="margin-right:20px;color:green;font-size:16px;">Cerrar sesión</strong></a></li>');
	}else{
		$("#menu-resp").html('<li><a href="#">opciones</a></li><li style="padding-left:14px;"><a href="includes/logout.php" style="padding:1px; line-height: 47px;"><strong style="margin-right:20px;color:green;font-size:16px;">Cerrar sesión</strong></a></li>');
	}
	})
	function menu(){
		var alto=$(window).height();
	var ancho=$(window).width();
	if(ancho>770){
		$("#menu-resp").html('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Menú<strong class="caret"></strong></a><ul class="dropdown-menu"><li><a href="#">opciones</a></li></ul></li><li style="padding-left:14px;"><a href="includes/logout.php" style="padding:1px; line-height: 47px;"><strong style="margin-right:20px;color:green;font-size:16px;">Cerrar sesión</strong></a></li>');
	}else{
		$("#menu-resp").html('<li><a href="#">Opcion 1</a></li><li style="padding-left:14px;"><a href="includes/logout.php" style="padding:1px; line-height: 47px;"><strong style="margin-right:20px;color:green;font-size:16px;">Cerrar sesión</strong></a></li>');
	}
	}
</script>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation" height="50px;">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			 <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
		</button> <a class="navbar-brand" href="index.php"><img src="img/logo_menu.png" onload="menu()" style="height:140%; margin-top:-5px;"/></a>
	</div>
	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="padding-left:20px;">
		<ul class="nav navbar-nav navbar-right" id="menu-resp">
			<li style="padding-left:14px;">
				<a href="includes/logout.php" style="padding:1px; line-height: 47px;"><strong style="margin-right:20px;color:green;font-size:16px;">Cerrar sesión</strong></a>
			</li>
		</ul>
	</div>
</nav>
