var agente_LS;
var usuario = [ {email : "flor@gmail.com" , password : "12345678" , type : 'Member' },
                 {email : "miriam@gmail.com", password : "12345678" , type : 'Member' },
                 {email : "emma@gmail.com" , password : "12345678" , type : 'Publico' }];
								 
localStorage.setItem( "flor@gmail.com",JSON.stringify(usuario[0]));
localStorage.setItem( "miriam@gmail.com",JSON.stringify(usuario[1]));

var agentes = [

	{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu','firefox','core-duo']},
	{ id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu','mysql','core-duo']},
	{ id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
	{ id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu']},
	{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : ['firefox','core-duo']},
	{ id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : ['core-duo']},
	{ id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : ['core-duo']}

]
if(!localStorage.getItem('agentes')){
  localStorage.setItem('agentes',JSON.stringify(agentes));
  agente_LS = JSON.parse(localStorage.getItem('agentes'));
}
else{
  agente_LS = JSON.parse(localStorage.getItem('agentes'));
}
