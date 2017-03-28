
function findUserStorage(a, b) { //ingresa mi correo y pass del login
  var cont= 0;
  var m ="";
  // console.log("cuenta: "+ cuenta);
  usuario_LS.filter(function (e){
    if (a == e.email&& b == e.password) {
  		cont++;
      m = e.type;
  	}
  });
    if(cont == 1) {
      localStorage.setItem("usuario-correo", m);
      window.location="index.html";

    } else {
      alert("Usted no se encuentra registrado");
    }
  }

  // function mostrar(a){
  //   // var datos = localStorage.getItem(); // aqui obtiene en arreglos
  //   var agentes_storage="";
  //    if (usuario_LS != null){
  //      agentes_storage =  JSON.parse(datos);
  //    }
  //    return agentes_storage;// los lleva a string
  // }
