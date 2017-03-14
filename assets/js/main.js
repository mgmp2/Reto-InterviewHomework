
// var btnAgents = document.getElementById('btnAgents');
//var btnAll = document.getElementById('btnAll');
var btnPhysical = document.getElementById('btnPhysical');
var btnVirtual = document.getElementById('btnVirtual');
var content_agent = document.getElementById('content-left');
btnAgents.addEventListener('click',function(e){
  e.preventDefault();
  var header_agents = document.getElementById('header-agents');
  header_agents.style.display = "block"
});
btnAll.addEventListener('click',function(e){
  content_agent.innerHTML = "";
  e.preventDefault();
  mostrarAgentes(agentes,content_agent);
});
btnPhysical.addEventListener('click',function(e){
  e.preventDefault();
  content_agent.innerHTML = "";
  var agentes_fisicos = agentes.filter(e => e.tipo == 'fisico');
  mostrarAgentes(agentes_fisicos,content_agent);
});
btnVirtual.addEventListener('click',function(e){
  e.preventDefault();
  content_agent.innerHTML = "";
  var agentes_virtuales = agentes.filter(e => e.tipo == 'virtual');
      mostrarAgentes(agentes_virtuales,content_agent);
});

var mostrarAgentes = function(array,elemento){
  for (var i = 0; i < array.length; i++) {
      elemento.appendChild(createHTMLPanel(i));
  }
}

var createHTMLPanel = function(indice) {
    var recursos_agentes = agentes[indice].recursos.map(e => e);
    var panel = document.createElement('div');
    panel.setAttribute('data-id',agentes[indice].id);
    if(agentes[indice].estado == 'idle'){
      panel.setAttribute('class','panel-agents-idle');
    }else{
      panel.setAttribute('class','panel-agents-building');
    }
    var span_circulo = document.createElement('span');
    span_circulo.setAttribute('class','circle');
    var div_agents = document.createElement('div');
    div_agents.setAttribute('class','top-text');
    var span_dominio = document.createElement('span');
    span_dominio.innerHTML = agentes[indice].url + "&nbsp &nbsp &nbsp|&nbsp "+agentes[indice].estado + "&nbsp|&nbsp"+ agentes[indice].direccionIP +  "&nbsp|&nbsp"+ agentes[indice].directorio;
    var span_directorio = document.createElement('span');
    div_agents.appendChild(span_dominio);
    var div_recursos = document.createElement('div');
    var span_resources = document.createElement('span');
    recursos_agentes.map(function(e){
      var nombre_recurso = document.createElement('span');
      nombre_recurso.innerHTML = "&nbsp &nbsp"+e.name+ '&nbsp &nbsp';
      var a = document.createElement('input');
      a.setAttribute('type','button');
      a.setAttribute('value','X');
      a.setAttribute('resourse-id',e.id);
      //span_resources.innerHTML = e
      span_resources.appendChild(nombre_recurso);
      span_resources.appendChild(a);
    //  span_resources.innerHTML = e + span_resources.appendChild(a);
    });
    div_recursos.setAttribute('class','bottom-text');
    var agregar = document.createElement('input');
    agregar.setAttribute('type','button');
    agregar.setAttribute('value','+ Specify Resources');
    agregar.addEventListener('click',function(e) {
      e.preventDefault();
      var agregarRecurso = prompt("Separe multiple resources name with commas");
    });
    div_recursos.appendChild(agregar);
    div_recursos.appendChild(span_resources);

    // var eliminar = document.createElement('a');
    // eliminar.setAttribute('href',"#");
    // eliminar.innerHTML = "Eliminar"
    // eliminar.addEventListener('click',function(e) {
    //   e.preventDefault();
    //   var postId = e.target.parent.getAttribute('data-id');
    //
    // });
    panel.appendChild(span_circulo);
    panel.appendChild(div_agents);
    panel.appendChild(div_recursos);
    return panel;
}
