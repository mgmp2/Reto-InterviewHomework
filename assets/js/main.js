// var btnAgents = document.getElementById('btnAgents');
//var btnAll = document.getElementById('btnAll');
// x = document.getElementById("mostrar");
// x.style.display = "none";

// if(localStorage.getItem("usuario-correo")){
//   x.style.display = "block";
//   console.log(localStorage.getItem("usuario-correo"));
//   var ingreso= document.getElementById("typeOfsigin");
//   ingreso.textContent = localStorage.getItem("usuario-correo") ;

function changeColorOfAgents(a,x,y){
  a.style.backgroundColor = "#e2d3d3";
  x.style.backgroundColor = "#9e9494";
  y.style.backgroundColor = "#9e9494";
}

function dce(e){
  return document.createElement(e);
}

var ejecutar = function(){
  var btnPhysical   = document.getElementById('btnPhysical');
  var btnVirtual    = document.getElementById('btnVirtual');
  var content_agent = document.getElementById('content-left');
  document.getElementById('btnAgents').addEventListener('click',function(e){
    var x   = document.getElementById("btnAgents");
    x.style.backgroundColor = "gray";
    e.preventDefault();
    var header_agents = document.getElementById('header-agents');
    header_agents.style.display = "block";
});

btnAll.addEventListener('click',function(e){
  content_agent.innerHTML = "";
  changeColorOfAgents(btnAll, btnPhysical,btnVirtual);
  e.preventDefault();

  mostrarAgentes(agentes,content_agent);
  summary('total-building','panel-agents-building');
  summary('total-idle','panel-agents-idle');
  document.getElementById('content-right').style.display = "block";
});

btnPhysical.addEventListener('click',function(e){
  e.preventDefault();
  changeColorOfAgents(btnPhysical,btnAll, btnVirtual);
  content_agent.innerHTML = "";
  var agentes_fisicos = agentes.filter(e => e.tipo == 'fisico');
  mostrarAgentes(agentes_fisicos,content_agent);
  summary('total-building','panel-agents-building');
  summary('total-idle','panel-agents-idle');
  document.getElementById('content-right').style.display = "block";
});

btnVirtual.addEventListener('click',function(e){
  e.preventDefault();
  changeColorOfAgents(btnVirtual, btnAll, btnPhysical);
  content_agent.innerHTML = "";
  var agentes_virtuales = agentes.filter(e => e.tipo == 'virtual');
      mostrarAgentes(agentes_virtuales,content_agent);
      summary('total-building','panel-agents-building');
      summary('total-idle','panel-agents-idle');
      document.getElementById('content-right').style.display = "block";

});

var mostrarAgentes = function(array,elemento){
    for (var i = 0; i < array.length; i++) {
        elemento.appendChild(createHTMLPanel(array[i].id)); //Se envía el id del agentes
    }
}
function summary(element,clase){
  var total_building = document.getElementById(element);
  var total = document.getElementsByClassName(clase).length;
  total_building.innerHTML = total;
}

var createHTMLPanel = function(indice) {

    var panel = dce('div');
    if(agentes[indice].estado == 'idle') { //Se asigna class segun estado(idle or building);
      panel.setAttribute('id',indice);
      panel.setAttribute('class','panel-agents-idle');
    } else {
      panel.setAttribute('id',indice);
      panel.setAttribute('class','panel-agents-building');
    }
    //Se crea el Circulo y se asigna class
    var span_circulo = dce('span');
    span_circulo.setAttribute('class','circle');

    var div_agents = dce('div');
    div_agents.setAttribute('class','top-text');

    var span_dominio = dce('span');
    span_dominio.innerHTML = agentes[indice].url + "&emsp;|&nbsp "+agentes[indice].estado + "&nbsp|&nbsp"+ agentes[indice].direccionIP +  "&nbsp|&nbsp"+ agentes[indice].directorio;
    div_agents.appendChild(span_dominio);

    var span_resources = dce('span');
    span_resources.setAttribute('id','ar'+indice)

<<<<<<< HEAD
    var recursos_agentes = agente_LS[indice].recursos.map(e => e); // Arreglo del atributo Recursos

    agente_LS[indice].recursos.map(function(a,i){
=======
    var recursos_agentes = agentes[indice].recursos.map(e => e); // Arreglo del atributo Recursos
    recursos_agentes.map(function(e,i){
>>>>>>> LocalStorage
      var span_padre = dce('span');
      span_padre.setAttribute('id', 'idRec'+i)
      var nombre_recurso = dce('span');
      nombre_recurso.innerHTML = "&nbsp &nbsp"+a+ '&nbsp &nbsp';
      var btn_eliminar = dce('input');
      btn_eliminar.setAttribute('type','button');
      btn_eliminar.setAttribute('value','X');
      btn_eliminar.setAttribute('class','btn-resources');
      btn_eliminar.addEventListener('click',function(e){
        console.log(a);
        var parentSpan = e.target.parentNode; //obtiene el span_padre del Boton eliminar
        span_resources.removeChild(parentSpan); //Remueve el span_padre del span_resources
        var eliminar = agente_LS[indice].recursos.indexOf(a)
        console.log(agente_LS[indice].recursos.indexOf(a));
        agente_LS[indice].recursos.splice(eliminar,1); //Elimina del objeto agente del atributo recurso
        localStorage.setItem('agentes',JSON.stringify(agente_LS));

      });
      span_padre.appendChild(nombre_recurso);
      span_padre.appendChild(btn_eliminar);
      span_resources.appendChild(span_padre);
    });

    var div_recursos = dce('p');
    div_recursos.setAttribute('class','bottom-text');
    div_recursos.setAttribute('id','R' + indice);

    var toolTip = dce('div');
    toolTip.setAttribute('class','tooltip');

    var div_toolTip = dce('div');
    div_toolTip.setAttribute('class','tooltiptext');
    div_toolTip.setAttribute('id','tol'+indice);
    var span_toolTip = dce('span');
    span_toolTip.innerHTML ='(Separe multiple resources name with commas)';
    var input_resource = dce('input');
    input_resource.setAttribute('type','text');
    input_resource.setAttribute('class', "styleBox");
    var btn_toolTip = dce('button');
    btn_toolTip.setAttribute('data-id',agentes[indice].id);
    btn_toolTip.setAttribute('class', "styleButton");
    btn_toolTip.innerHTML = "Add Resource";
    btn_toolTip.addEventListener('click', function(e) {
      e.preventDefault();
      var agregarRecursos = input_resource.value;
      if(agregarRecursos){
      var arrayRecursos = agregarRecursos.split(',');
      var agente_id = parseInt(e.target.getAttribute('data-id')); //obtiene la posicion de mi div en el que me encuentro

      var id = agentes[parseInt(e.target.getAttribute('data-id'))].recursos.length;
      for (var i in arrayRecursos) {
        if(arrayRecursos[i].trim()){
          document.getElementById('R'+indice).appendChild(addResourcesArray(id,arrayRecursos[i].trim(),agente_id));
          document.getElementById('tol'+indice).classList.remove("active");

          id++;
        }else {
          alert("No puede guardar un recurso vacío");
        }
      }
      input_resource.value="";
      }
      else {
        alert("Debe ingresar recursos");
      }
    });
    var btn_toolClose = dce('button');
    btn_toolClose.setAttribute('class', "styleButton");
    btn_toolClose.innerHTML = "Close";
    btn_toolClose.addEventListener('click', function(e) {
      e.preventDefault();
    //document.getElementById('tol'+indice).style.visibility = "hidden";
    document.getElementById('tol'+indice).classList.toggle("active");

    });
    div_toolTip.appendChild(span_toolTip);
    div_toolTip.appendChild(input_resource);
    div_toolTip.appendChild(btn_toolTip);
    div_toolTip.appendChild(btn_toolClose);
    toolTip.appendChild(div_toolTip);
    var agregar = dce('input');
    agregar.setAttribute('type','button');
    agregar.setAttribute('value','+ Specify Resources');
    agregar.setAttribute('class', 'btn-add-resources');
    agregar.addEventListener('click',function(e) {
      e.preventDefault();
      //document.getElementById('tol'+indice).style.visibility = "visible";
      // var y =document.getElementById('tol'+indice::after);
      // y.style.visibility = 'visible';
      document.getElementById('tol'+indice).classList.toggle("active");
    });
    div_recursos.appendChild(agregar);
    div_recursos.appendChild(span_resources);
    panel.appendChild(span_circulo);
    panel.appendChild(div_agents);
    panel.appendChild(div_recursos);
    panel.appendChild(toolTip);
    return panel;
}


function addResourcesArray (i,nombre,id_agente){
  var nombre_recurso = document.getElementById('ar'+id_agente);
  var span_padre = dce('span');
  var span_hijo = dce('span');
  span_padre.setAttribute('id','idRec'+i );
  span_hijo.innerHTML = "&nbsp &nbsp"+nombre+ '&nbsp &nbsp';
  var btn = dce('input');
  btn.setAttribute('type','button');
  btn.setAttribute('value','X');
  btn.setAttribute('class','btn-resources');
  btn.addEventListener('click', function (e){
    var parentSpan = e.target.parentNode;
    nombre_recurso.removeChild(parentSpan);
    var eliminar = agente_LS[id_agente].recursos.indexOf(nombre);
    agente_LS[id_agente].recursos.splice(eliminar,1);
    localStorage.setItem('agentes',JSON.stringify(agente_LS));
  });
  span_padre.appendChild(span_hijo);
  span_padre.appendChild(btn);
console.log(span_padre);
  nombre_recurso.appendChild(span_padre);
  agente_LS[id_agente].recursos.push(nombre);
  localStorage.setItem('agentes',JSON.stringify(agente_LS));

  return nombre_recurso;
}
document.getElementById("salir").addEventListener("click", function(){
    var xSalir ="";
    localStorage.setItem("usuario-correo", xSalir);
    window.location = "login.html";
  });
}
ejecutar();
