function validateForm(){

    var nom   = document.getElementById("name");
    var ap    = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var pas   = document.getElementById("input-password");
    var op    = document.getElementById("opciones");

    var expRegName  = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/g;
    var expRegLast  = /[A-ZA-ZÁÉÍÓÚ]{1}([a-z]{2,12})+\s([A-ZÁÉÍÓÚ]+([a-z]{2,10}))/g;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expRegPass  = /^[a-zA-z]{6,}$/;
    var cont = 0;

    //Name
    if(!expRegName.test(nom.value)){
      alert("Escribir correctamente \nCampo nombre: empezando por Mayúscula");
      nom.focus();
      cont++;
    }

    //Last Name
    else if(!expRegLast.test(ap.value)){
      alert("Escribir correctamente \nCampo apellido: Sus dos apellidos empezando por Maýucula");
      ap.focus();
      cont++;
    }

    //Email
    else if(!expRegEmail.test(email.value)){
          alert("Escribir correctamente \nCampo email de manera correcta");
          email.focus();
          cont++;
    }

    //Password
    else if(!expRegPass.test(pas.value)){
      if(pas.value == "123456" || pas.value == "98754"){
        alert("Escribir correctamente \nCampos de contraseña diferente de: 123456 o 98754");
        pas.focus();
        cont++;
      }
      else if(pas.value == ""){
        alert("Debe llenar el campo de contraseña!!");
        pas.focus();
        cont++;
      }
    }

    //options
    else if(op.value==0){
      alert("Seleccion alguna opción en su tipo de bicicleta");
      op.focus();
      cont++;
    }
    else if(cont == 0){
      alert("Muy bien \n Lleno los datos correctamente");
    }
}
