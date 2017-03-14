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

function validarCuentas(a, b){
	console.log("Correo"+a + "contraseña"+ b);
var m = "";

var usuarios = [ {email : "flor@gmail.com" , password : "flortello" , type : 'Member' },
				 {email : "naomi@gmail.com", password : "naomilalala" , type : 'Publico' },
				 {email : "emma@gmail.com" , password : "emmaPam" , type : 'Publico' }];

var agentes = [
	{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu','firefox','core-duo']},
	{ id : 1 ,tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu','mysql','core-duo']},
	{ id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
	{ id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu']},
	{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : ['firefox','core-duo']},
	{ id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : ['core-duo']}
]

var  cont = 0;
usuarios.forEach(function(e){
	if (a == e.email && b == e.password) {
		cont++;
		m= e.type; // me retorna : member o publico
	}
});


if(cont == 1) {
	localStorage.setItem("usuario-correo", m);
	window.location="index.html";
	console.log(window.location);
	console.log("Quien eres:"+m);


}
else{
	alert("Usted no se encuentra registrado");
}
}
