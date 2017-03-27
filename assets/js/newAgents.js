var agentes = [

	{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'},{name:'firefox'},{name:'core-duo'}]},
	{ id : 1  ,tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'},{name:'mysql'},{name:'core-duo'}]},
	{ id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
	{ id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'}]},
	{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{name:'firefox'},{name:'core-duo'}]},
	{ id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{name:'core-duo'}]},
	{ id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{name:'core-duo'}]}

]

var agente =[];

function Agente(id, t, u, s, ip, dir, array){
  this.id= id;
  this.tipo= t;
  this.url = u;
  this.estado= s;
  this.dirrecionIP= ip;
  this.directorio= dir;
  this.recursos = array;
}

function agregarAgente(id_agente, tipo, url, estado, direccionIp, directorio, recursos){
   agente.push(new Agente(id_agente, tipo, url, estado, direccionIp, directorio, recursos));
      var key = id_agente; //faltaaaaa alagoooo aquiiiiiii
      for(var i = 0; i< agente.length; i++){
        if(key=== agente[i].id){
          var datos = JSON.stringify(usuario[i]);
          localStorage.setItem(key, datos);
        }
      }
};
