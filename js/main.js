
function validateForm(){
	// obteniendo datos 
	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var correo = $('#input-email').val();
	var contrasena = $('#input-password').val();
	var bici = $('select').val();
	// mensaje span	
	var mensaje;
	// validando nombre
	var nameContainer = $('.name-container');
	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		mensaje = $('<span> Debe ingresar su nombre </span>').fadeOut(3000);
		nameContainer.append(mensaje);
		return false;
		//primera letra mayuscula
	}else if(nombre.charAt(0)!== nombre.charAt(0).toUpperCase()){
		mensaje = $('<span>La primera letra de tu nombre debe de ser mayuscula </span>').fadeOut(3000);
		nameContainer.append(mensaje);
		return false;
		// solo letras
	}else if (nombre.match(/[^a-zA-Z]+/g)){
		mensaje = $('<span>Ingresa solo letras </span>').fadeOut(3000);
		nameContainer.append(mensaje);
		return false;
	}
	//valindando apellido
	var lastnameContainer = $('.lastname-container');
	if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){
		mensaje = $('<span> Campo obligatorio, por favor ingresa tu  apellido </span>').fadeOut(3000);
		lastnameContainer.append(mensaje);
		return false;
		//primera letra mayuscula
	}else if(apellido.charAt(0)!== apellido.charAt(0).toUpperCase()){
		mensaje = $('<span>La primera letra de tu apellido debe de ser mayuscula </span>').fadeOut(3000);
		lastnameContainer.append(mensaje);
		return false;
		// solo letras
	}else if (apellido.match(/[^a-zA-Z]+/g)){
		mensaje = $('<span>Ingresa solo letras </span>').fadeOut(3000);
		lastnameContainer.append(mensaje);
		return false;
	}
	//validando correo
	var correoContainer = $('.email-container');
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
		mensaje = $('<span> Campo obligatorio, por favor ingresa tu correo </span>').fadeOut(3000);
		correoContainer.append(mensaje);
		return false;
	}else if( !expr.test(correo)){
		mensaje = $('<span> Ingresa correo con formato valido </span>').fadeOut(3000);
		correoContainer.append(mensaje);
		return false;
	}
	//validando contraseña
	var contrasenaContainer = $('#input-password').parent();
	if(  contrasena == null ||  contrasena.length == 0 || /^\s+$/.test(contrasena)){
		mensaje = $('<span> Campo obligatorio, por favor ingresa tu contraseña </span>').fadeOut(3000);
		contrasenaContainer.append(mensaje);
		return false;
	}else if(contrasena.length < 6){
		mensaje = $('<span> Tu contraseña debe tener al menos 6 caracteres </span>').fadeOut(3000);
		contrasenaContainer.append(mensaje);
		return false;
	}else if(contrasena === "password"|| contrasena === "123456"|| contrasena === "098754"){
		mensaje = $('<span> Tu contraseña no debe ser "password" o "123456" o  "098754" </span>').fadeOut(3000);
		contrasenaContainer.append(mensaje);
		return false;
	}

	//validando seleccion de bicicleta 
	var biciContainer = $('select.form-control').parent();
	if(bici == null || bici == 0){
		mensaje = $('<span> Por favor selecciona tu bicicleta </span>').fadeOut(3000);
		biciContainer.append(mensaje);
  		return false;
	}
	//validando informacion adicional
	/*var masInfo= document.querySelector(".checkbox span");
	if( !masInfo.checked ) {
		return false;
	}*/
	return true;
}