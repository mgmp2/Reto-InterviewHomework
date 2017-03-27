

var agente = [{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'Ubuntu'},{id: '0', nombre: 'firefox'},{id: '0', nombre: 'core-duo'}]}],
{ id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'Ubuntu'}]}],
{ id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
{ id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'Ubuntu'}]}],
{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'firefox'}]}],
{ id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'core-duo'}]}],
{ id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: '0', nombre: 'core-duo'}]}]
];

var mostrarAgentes = function(array){
  for (var i = 0; i < array.length; i++) {
    (createHTMLPanel(array[i].id)); //Se envía el id del agentes
  }
};


var recursos = function(){
    this.id;
    this.nombre;
    this.agregarRecursos = function(id_agente , nombreR){
      var nuevoArray = [];
      nuevoArray = agente[id_agente].recursos.push({id : agente[id_agente].recursos.length , nombre : nombreR}});
      return nuevoArray;
    };

    this.btnAll       = function(array){
      mostrarAgentes(array);
    };

    this.btnPhysical  = function(array){
    mostrarAgentes(array);
    };

    this.btnVirtual   = function(array){
      mostrarAgentes(array);
    };

    this.summary      = function (clase, arrayObj){
        var total = 0;
        arrayObj.map(function (e) {
          if(e.tipo == clase){
            total++;
          }
        });
        return total;
    };

    this.mostrarRecursos = function(array indice) {
        var mostrar = [];
        var descripcion = agente[indice].url + agente[indice].estado + agente[indice].direccionIP + agente[indice].directorio;
        array[indice].recursos.map(function(e){
          mostrar.push(e);
        });
        return mostrar;
    };


    this.eliminarRecursos = function (id_agente){
        var eliminar = agente.map(e => e.id).
        })
        agente[id_agente].recursos.splice(eliminar,1);
        localStorage.setItem('agentes',JSON.stringify(agente));
      });


}



if(typeof exports !== 'undefined') {
  exports.ejecutar = ejecutar;
}
