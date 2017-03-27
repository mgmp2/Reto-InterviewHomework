var id_usuario = 0;

// var id   = document.getElementById("dni");
var nom   = document.getElementById("name");
var ap    = document.getElementById("lastname");
var email = document.getElementById("input-email");
var pas   = document.getElementById("input-password");
var op    = document.getElementById("opciones");

document.getElementById("login").addEventListener('click', function(e){
  e.preventDefault();
  window.location = "login.html";
});
document.getElementById("submit").addEventListener('click', function(e){
  e.preventDefault();

    var expRegName  = /^([a-zA-Zñáéíóú]+[\s]*)+$/g; //acepta sólo letra
    var expRegLast  = /^([a-zA-Zñáéíóú]+[\s]*)+$/g;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expRegPass  = /^[a-zA-Zñ0-9@||?||.||-||_]{6,}$/;
    // var expRegDni   = /^[0-9]{8}$/;
    var cont = 0;
    console.log("ingresaste funcion");
    //dni
    // if(!expRegDni.test(id.value)){
    //   alert("Escribir correctamente \nCampo dni");
    //   id.focus();
    //   cont++;
    // }
    //Name
    if(!expRegName.test(nom.value)){
      alert("Escribir correctamente \nCampo nombre");
      nom.focus();
      cont++;
    }

    //Last Name
    else if(!expRegLast.test(ap.value)){
      alert("Escribir correctamente \nCampo apellido");
      ap.focus();
      cont++;
    }

    //Email
    else if(!expRegEmail.test(email.value)){
          alert("Escribir correctamente \nCampo email de manera adecuada");
          email.focus();
          cont++;
    }
    else if(localStorage.getItem(email.value)){

        alert("Ese correo ya se encuentra registrado");
        cont++;
    }

    //Password
    else if(!expRegPass.test(pas.value)){
      if(pas.value == "123456" || pas.value == "98754"){
        alert("Escribir correctamente \nCampos de contraseña diferente de: 123456 o 98754");
        pas.focus();
        cont++;
      }
      else if(pas.value.length < 6 ){
        alert("Su contraseña debe tener más de 6 dígitos");
      }
      else if(pas.value == ""){
        alert("Debe llenar el campo de contraseña!!");
        pas.focus();
        cont++;
      }
      else{
        alert("Advertencia: \nLa contraseña no debe tener un espacio ")
      }
    }

    //options
    else if(op.value==0){
      alert("Seleccion alguna opción: \n -Público \n -Miembro");
      op.focus();
      cont++;
    }

    else if(cont == 0){


      nom_conv = convertirMayMin(nom.value);
      ape_conv =convertirMayMin(ap.value);
      agregarUsuario( nom_conv, ape_conv, email.value, pas.value, op.value);
      alert("Muy bien \nAhora puede iniciar sesión");

    }
});


function Usuario ( nom, ap, correo, contra, tipo){
  // this.id = id;
  this.nombre = nom;
  this.apellido = ap;
  this.email = correo;
  this.password= contra;
  this.type = tipo;
}
var usuario = [];

function agregarUsuario(n,a,c,p,t){
   usuario.push(new Usuario(n, a ,c ,p, t));
  cleanInput( nom, ap, email, pas, op);

      var key = c;
      for(var i = 0; i< usuario.length; i++){
        if(key=== usuario[i].email){
          var datos = JSON.stringify(usuario[i]);
          localStorage.setItem(key, datos);
        }

      }
};

function cleanInput (nom, ap, correo, contra, tip) {
  nom.value = ""; ap.value= ""; correo.value= ""; contra.value =""; tip.value= 0;

};

function convertirMayMin(valor ){
  var x = valor.split(" ");
  var z = x.length;
  var variable ="";
  for (var i = 0; i < x.length; i++){
    if(i< x.length-1) {
      variable += x[i].charAt(0).toUpperCase() + x[i].slice(1).toLowerCase() + " ";
    } if(i == x.length-1) {
      variable += x[i].charAt(0).toUpperCase() + x[i].slice(1).toLowerCase()
    }
  }  return variable;
}
