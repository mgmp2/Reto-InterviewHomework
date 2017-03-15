// var btnAgents = document.getElementById('btnAgents');
//var btnAll = document.getElementById('btnAll');
// x = document.getElementById("mostrar");
// x.style.display = "none";

// if(localStorage.getItem("usuario-correo")){
//   x.style.display = "block";
//   console.log(localStorage.getItem("usuario-correo"));
//   var ingreso= document.getElementById("typeOfsigin");
//   ingreso.textContent = localStorage.getItem("usuario-correo") ;
var ejecutar = function(){
  var btnPhysical = document.getElementById('btnPhysical');
  var btnVirtual = document.getElementById('btnVirtual');
  var content_agent = document.getElementById('content-left');
document.getElementById('btnAgents').addEventListener('click',function(e){
  e.preventDefault();
  var header_agents = document.getElementById('header-agents');
  header_agents.style.display = "block"
});

btnAll.addEventListener('click',function(e){
  content_agent.innerHTML = "";
  e.preventDefault();
  mostrarAgentes(agentes,content_agent);
  summary('total-building','panel-agents-building');
  summary('total-idle','panel-agents-idle');
});

btnPhysical.addEventListener('click',function(e){
  e.preventDefault();
  content_agent.innerHTML = "";
  var agentes_fisicos = agentes.filter(e => e.tipo == 'fisico');
  mostrarAgentes(agentes_fisicos,content_agent);
  summary('total-building','panel-agents-building');
  summary('total-idle','panel-agents-idle');
});

btnVirtual.addEventListener('click',function(e){
  e.preventDefault();
  content_agent.innerHTML = "";
  var agentes_virtuales = agentes.filter(e => e.tipo == 'virtual');
      mostrarAgentes(agentes_virtuales,content_agent);
      summary('total-building','panel-agents-building');
      summary('total-idle','panel-agents-idle');

});

var mostrarAgentes = function(array,elemento){
    for (var i = 0; i < array.length; i++) {
        elemento.appendChild(createHTMLPanel(i));
    }
}
function summary(element,clase){
  var total_building = document.getElementById(element);
  var total = document.getElementsByClassName(clase).length;
  total_building.innerHTML = total;
}

var createHTMLPanel = function(indice) {
    var recursos_agentes = agentes[indice].recursos.map(e => e);
    var panel = document.createElement('div');
    if(agentes[indice].estado == 'idle') {
      panel.setAttribute('class','panel-agents-idle');
    } else {
      panel.setAttribute('class','panel-agents-building');
    }
    var span_circulo = document.createElement('span');
    span_circulo.setAttribute('class','circle');
    var div_agents = document.createElement('div');
    div_agents.setAttribute('class','top-text');
    var span_dominio = document.createElement('span');
    span_dominio.innerHTML = agentes[indice].url + "&emsp;|&nbsp "+agentes[indice].estado + "&nbsp|&nbsp"+ agentes[indice].direccionIP +  "&nbsp|&nbsp"+ agentes[indice].directorio;
    var span_directorio = document.createElement('span');
    div_agents.appendChild(span_dominio);
    var div_recursos = document.createElement('div');
    div_recursos.setAttribute('id',indice);
    var span_resources = document.createElement('span');
    span_resources.setAttribute('id','ar'+indice)
    recursos_agentes.map(function(e){
      var span_padre = document.createElement('span');
      var span_resource = document.createElement('span');
      var nombre_recurso = document.createElement('span');
      nombre_recurso.setAttribute('resource-id',e.id);
      nombre_recurso.innerHTML = "&nbsp &nbsp"+e.name+ '&nbsp &nbsp';
      var btn = document.createElement('input');
      btn.setAttribute('type','button');
      btn.setAttribute('value','X');
      btn.addEventListener('click',function(e){
        
      });
      span_padre.appendChild(nombre_recurso);
      span_padre.appendChild(btn);
      span_resources.appendChild(span_padre);
    });
    div_recursos.setAttribute('class','bottom-text');
    var agregar = document.createElement('input');
    agregar.setAttribute('type','button');
    agregar.setAttribute('value','+ Specify Resources');
    agregar.setAttribute('data-id',agentes[indice].id);
    agregar.addEventListener('click',function(e) {
      e.preventDefault();
      var agregarRecurso = prompt("Separe multiple resources name with commas");
      var arrayRecursos = agregarRecurso.split(',');
      var agente_id = parseInt(e.target.getAttribute('data-id'));
      var id = agentes[parseInt(e.target.getAttribute('data-id'))].recursos.length;
      for (var i in arrayRecursos) {
          document.getElementById(e.target.getAttribute('data-id')).appendChild(agregarRecursos(id,arrayRecursos[i],agente_id));
          id++;
      }
    });
    div_recursos.appendChild(agregar);
    div_recursos.appendChild(span_resources);
    panel.appendChild(span_circulo);
    panel.appendChild(div_agents);
    panel.appendChild(div_recursos);
    return panel;
}

function agregarRecursos (i,nombre,id_agente){
  var nombre_recurso = document.getElementById('ar'+id_agente);
  var span_padre = document.createElement('span');
  var span_hijo = document.createElement('span');
  span_hijo.setAttribute('resource-id',i);
  span_hijo.innerHTML = "&nbsp &nbsp"+nombre+ '&nbsp &nbsp';
  var btn = document.createElement('input');
  btn.setAttribute('type','button');
  btn.setAttribute('value','X');
  span_padre.appendChild(span_hijo);
  span_padre.appendChild(btn);
  nombre_recurso.appendChild(span_padre);
  var obje = { id : i, name : nombre  }
  agentes[id_agente].recursos.push(obje);
  return nombre_recurso;
}
document.getElementById("salir").addEventListener("click", function(){
    var xSalir ="";
    localStorage.setItem("usuario-correo", xSalir);
    console.log("dddd"+xSalir);
    window.location = "login.html";
  });
}

// }
  // else{
  //   alert("Debe ingresar");
  //   x.style.display = "none";
  //   window.location = "login.html";
  // }
ejecutar();
