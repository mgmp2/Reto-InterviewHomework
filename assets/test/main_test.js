var agente_LS;
var recurso = function(){
    this.Agente = function (){
      var agente =
      [{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'firefox'}]},
      { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
      { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
      { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
      { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}
    ];
     agente_LS = agente;
    // if(!localStorage.getItem('agentes')){
    //   localStorage.setItem('agentes',JSON.stringify(agente));
    //   agente_LS = JSON.parse(localStorage.getItem('agentes'));
    // }
    // else{
    //   agente_LS = JSON.parse(localStorage.getItem('agentes'));
    // }
  };

    this.mostrarAgentes = function(tipo){
      if(tipo == 'all'){
        return agente_LS
      }
      else{
        return agente_LS.filter(e => e.tipo == tipo);
      }
    };
    this.agregarRecursos = function(id_agente , nombreR){
      var recurso = nombreR.split(",");
      recurso.map(function(e,i){
        agente_LS[id_agente].recursos.push({id : 'R'+agente_LS[id_agente].recursos.length , nombre : e.trim() });

      });
      return agente_LS[id_agente];
    };

    // this.btnAll       = function(array){
    //   mostrarAgentes(array);
    // };
    //
    // this.btnPhysical  = function(array,tipo){
    // mostrarAgentes(array);
    // };
    //
    // this.btnVirtual   = function(array){
    //   mostrarAgentes(array);
    // };
    //
    this.summary      = function (clase, arrayObj){
        var total = 0;
      // console.log(clase);
        var filtro = arrayObj.filter(e => e.estado == clase);
        return filtro.length;
    };
    //
    // this.mostrarRecursos = function(array indice) {
    //     var mostrar = [];
    //     var descripcion = agente[indice].url + agente[indice].estado + agente[indice].direccionIP + agente[indice].directorio;
    //     array[indice].recursos.map(function(e){
    //       mostrar.push(e);
    //     });
    //     return mostrar;
    // };
    //
    //
    this.eliminarRecursos = function (id_agente, id_recurso){
        var eliminar = agente_LS[id_agente].recursos.map(e => e.id).indexOf(id_recurso);
        // console.log(eliminar);
         agente_LS[id_agente].recursos.splice(eliminar,1);
         return agente_LS;
        // localStorage.setItem('agentes',JSON.stringify(agente));
      // });
    }


}



if(typeof exports !== 'undefined') {
  exports.recurso = recurso;
}
