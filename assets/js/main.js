// var btnAgents = document.getElementById('btnAgents');
//var btnAll = document.getElementById('btnAll');
// x = document.getElementById("mostrar");
// x.style.display = "none";

// if(localStorage.getItem("usuario-correo")){
//   x.style.display = "block";
//   console.log(localStorage.getItem("usuario-correo"));
//   var ingreso= document.getElementById("typeOfsigin");
//   ingreso.textContent = localStorage.getItem("usuario-correo") ;
var app = new recurso();
app.Agente();
window.addEventListener('load', function(){
  var btnPhysical   = document.getElementById('btnPhysical');
  var btnVirtual    = document.getElementById('btnVirtual');
  var content_agent = document.getElementById('content-left');


  btnAgents.addEventListener('click',function(e){
    app.Agente();
    e.preventDefault();
    this.style.backgroundColor = "gray";
    var header_agents = document.getElementById('header-agents');
    header_agents.style.display = "block";

    btnAll.addEventListener('click',function(e){
      content_agent.innerHTML = "";
      changeColorOfAgents(btnAll, btnPhysical,btnVirtual);
      e.preventDefault();
      mostrarAgentes(agente_LS,content_agent);
      summary('total-building','panel-agents-building');
      summary('total-idle','panel-agents-idle');
      document.getElementById('content-right').style.display = "block";
    });

    btnPhysical.addEventListener('click',function(e){
      e.preventDefault();
      changeColorOfAgents(btnPhysical,btnAll, btnVirtual);
      content_agent.innerHTML = "";
      var agentes_fisicos = agente_LS.filter(e => e.tipo == 'fisico');
      mostrarAgentes(agentes_fisicos,content_agent);
      summary('total-building','panel-agents-building');
      summary('total-idle','panel-agents-idle');
      document.getElementById('content-right').style.display = "block";
    });

    btnVirtual.addEventListener('click',function(e){
      e.preventDefault();
      changeColorOfAgents(btnVirtual, btnAll, btnPhysical);
      content_agent.innerHTML = "";
      var agentes_virtuales = agente_LS.filter(e => e.tipo == 'virtual');
          mostrarAgentes(agentes_virtuales,content_agent);
          summary('total-building','panel-agents-building');
          summary('total-idle','panel-agents-idle');
          document.getElementById('content-right').style.display = "block";
    });
  });

});

function mostrarAgentes(array,elemento){
    // for (var i = 0; i < array.length; i++) {
    //     elemento.appendChild(createHTMLPanel(array[i].id,)); //Se envía el id del agentes
    // }
    array.map(function(e,i){
      elemento.appendChild(createHTMLPanel(e.id));
    });
};

function summary(element,clase){
    var total_building = document.getElementById(element); // lugar donde muestra
    var total = document.getElementsByClassName(clase).length; //identifica cantidad de agente(clase) ya sea por  fisico o virtual
    total_building.innerHTML = total;
};

function createHTMLPanel(indice) {
    var panel = dce('div');
    if(agente_LS[indice].estado == 'idle') { //Se asigna class segun estado(idle or building);
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
    span_dominio.innerHTML = agente_LS[indice].url + "&emsp;|&nbsp "+agente_LS[indice].estado + "&nbsp|&nbsp"+ agente_LS[indice].direccionIP +  "&nbsp|&nbsp"+ agente_LS[indice].directorio;
    div_agents.appendChild(span_dominio);

    var span_resources = dce('span');
    span_resources.setAttribute('id','ar'+indice)

    agente_LS[indice].recursos.map(function(a,i){
        var span_padre = dce('span');
        span_padre.setAttribute('id', 'R'+i);
        var nombre_recurso = dce('span');
        nombre_recurso.innerHTML = "&nbsp &nbsp"+a.nombre+ '&nbsp &nbsp';
        var btn_eliminar = dce('input');
        btn_eliminar.setAttribute('type','button');
        btn_eliminar.setAttribute('value','X');
        btn_eliminar.setAttribute('class','btn-resources');

        btn_eliminar.addEventListener('click',function(e){
            console.log(a.nombre);
            var parentSpan = e.target.parentNode; //obtiene el span_padre del Boton eliminar
            span_resources.removeChild(parentSpan); //Remueve el span_padre del span_resources
            // var eliminar = agente_LS[indice].recursos.indexOf(a.nombre)
            var eliminar = agente_LS[indice].recursos.map(e => e.nombre).indexOf(a.nombre);
            console.log(eliminar);
            agente_LS[indice].recursos.splice(eliminar,1); //Elimina del objeto agente del atributo recurso
            // var s = app.eliminarRecursos(indice,parentSpan.id,JSON.parse(localStorage.getItem('agentes'))); //Elimina del objeto agente del atributo recurso
            var prueba = agente_LS[indice].recursos.map(e => e.id);
            console.log(prueba);
            localStorage.setItem('agentes',JSON.stringify(agente_LS));
          });

        span_padre.appendChild(nombre_recurso);
        span_padre.appendChild(btn_eliminar);
        span_resources.appendChild(span_padre);
    });

    var div_recursos = dce('p');
    div_recursos.setAttribute('class','bottom-text');
    div_recursos.setAttribute('id','A' + indice);

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
    btn_toolTip.setAttribute('data-id',agente_LS[indice].id);
    btn_toolTip.setAttribute('class', "styleButton");
    btn_toolTip.innerHTML = "Add Resource";
    btn_toolTip.addEventListener('click', function(e) {
        e.preventDefault();
        var agregarRecursos = input_resource.value;
        if(agregarRecursos) { //condicion que sea diferente de nulo en el tooltip de recursos
            var arrayRecursos = agregarRecursos.split(',');
            var agente_id = parseInt(e.target.getAttribute('data-id')); //obtiene la posicion de mi div en el que me encuentro

            var id = agente_LS[parseInt(e.target.getAttribute('data-id'))].recursos.length;
            for (var i in arrayRecursos) {
                if(arrayRecursos[i].trim()) {
                    document.getElementById('A'+indice).appendChild(addResourcesArray(id,arrayRecursos[i].trim(),agente_id));
                    document.getElementById('tol'+indice).classList.remove("active");
                    id++;
                } else {
                    alert("No puede guardar un recurso vacío");
                }
            }
          input_resource.value="";
        } else {
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


function addResourcesArray (i,nombreR,id_agente){
    var nombre_recurso = document.getElementById('ar'+id_agente);
    var span_padre = dce('span');
    var span_hijo = dce('span');
    span_padre.setAttribute('id','R'+i );
    span_hijo.innerHTML = "&nbsp &nbsp"+nombreR+ '&nbsp &nbsp';
    var btn = dce('input');
    btn.setAttribute('type','button');
    btn.setAttribute('value','X');
    btn.setAttribute('class','btn-resources');
    btn.addEventListener('click', function (e){
        var parentSpan = e.target.parentNode;
        nombre_recurso.removeChild(parentSpan);
        // var eliminar = agente_LS[id_agente].recursos.indexOf(nombreR);
        var eliminar = agente_LS[id_agente].recursos.map(e => e.nombre).indexOf(nombreR);
        agente_LS[id_agente].recursos.splice(eliminar,1);
      //   var s = app.eliminarRecursos(id_agente,parentSpan.id,JSON.parse(localStorage.getItem('agentes'))); //Elimina del objeto agente del atributo recurso
      // //  agente_LS = localStorage.setItem('agentes',JSON.stringify(nuevo));
      var prueba = agente_LS[id_agente].recursos.map(e => e.id);
      console.log(prueba);
      localStorage.setItem('agentes',JSON.stringify(agente_LS));
  });
    span_padre.appendChild(span_hijo);
    span_padre.appendChild(btn);
    console.log(span_padre);
    nombre_recurso.appendChild(span_padre);
    agente_LS[id_agente].recursos.push({id:'R'+i,nombre:nombreR});
    localStorage.setItem('agentes',JSON.stringify(agente_LS));

    return nombre_recurso;
};

document.getElementById("salir").addEventListener("click", function(){
    var xSalir ="";
    localStorage.setItem("usuario-correo", xSalir);
    window.location = "login.html";
});


function changeColorOfAgents(a,x,y){
    a.style.backgroundColor = "#e2d3d3";
    x.style.backgroundColor = "#9e9494";
    y.style.backgroundColor = "#9e9494";
};

function dce(e){
    return document.createElement(e);
};
