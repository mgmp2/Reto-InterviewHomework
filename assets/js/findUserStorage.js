
function findUserStorage(a, b) {

  // console.log("cuenta: "+ cuenta);
var cuenta = mostrar(a);
var cont=0;
var m="";

    if (a == cuenta.email && b == cuenta.password) {
  		cont++;
      m = cuenta.type;
      console.log(m); // me retorna : member o publico
  	}
    if(cont == 1) {
      localStorage.setItem("usuario-correo", m);
      window.location="index.html";

    } else {
      alert("Usted no se encuentra registrado");
    }
  }

  function mostrar(a){
    var datos = localStorage.getItem(a); // aqui obtiene en arreglos
    var agentes_storage="";
     if (datos != null){
       agentes_storage =  JSON.parse(datos);
     }
     return agentes_storage;// los lleva a string
  }
