var correo = document.getElementById("inputEmail");
var contra = document.getElementById("inputPassword");

document.getElementById("mostrarDatos").addEventListener('click', function (){

	var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	var expRegPass  = /^[a-zA-z-1||2||3||4||5||6||7||8||9]{6,}$/;


	var emailError = document.getElementById("errorEmail");
	var passError	= document.getElementById("errorPass");


	if(!expRegEmail.test(correo.value)) {
	passError.innerHTML = "";
	if(!correo.value){
		emailError.innerHTML= "El campo de usuario no puede estar en blanco";
		correo.focus();
	} else {
		emailError.innerHTML= "Ingrese correo válido";
		correo.focus();
	}
}

  else if(!expRegPass.test(contra.value)) {
  	emailError.innerHTML= "";
  	if(!contra.value){
  		passError.innerHTML = " El campo de contraseña no puede estar en blanco";
  		contra.focus();
  	} else {
  		passError.innerHTML = "Ingrese contraseña válida";
  		contra.focus();
  	}
  } else {
  	passError.innerHTML = "";
  	emailError.innerHTML= "";

  	validarCuentas(correo.value, contra.value);
  }

});
document.getElementById("register").addEventListener('click', function(e) {
  e.preventDefault();
	window.location = "formulario.html";
});
