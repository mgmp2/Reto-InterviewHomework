x = document.getElementById("mostrar");
x.style.display = "none";
if(localStorage.getItem("usuario-correo")){
  x.style.display = "block";
  console.log(localStorage.getItem("usuario-correo"));
  var ingreso= document.getElementById("typeOfsigin");
  ingreso.textContent = localStorage.getItem("usuario-correo") ;

} else{
  alert("Debe ingresar");
  x.style.display = "none";
  window.location = "login.html";
}
