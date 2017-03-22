
// var usuarios = [ {nombre: "Flor",apellido: "Tello Lala", email : "flor@gmail.com" , password : "12345678" , type : 'Member' },
//                  {nombre:"Naomi" ,apellido: "Lagos Lwww",email :"naomi@gmail.com", password : "12345678" , type : 'Public' },
//                  {nombre:"Emma" ,apellido: "Flores Ross",email :"emma@gmail.com" , password : "12345678" , type : 'Public' }];

var agentes = [

	{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'},{name:'firefox'},{name:'core-duo'}]},
	{ id : 1  ,tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'},{name:'mysql'},{name:'core-duo'}]},
	{ id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
	{ id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{name:'Ubuntu'}]},
	{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{name:'firefox'},{name:'core-duo'}]},
	{ id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{name:'core-duo'}]},
	{ id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{name:'core-duo'}]}

]
