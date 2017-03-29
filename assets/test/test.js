var assert    = require('assert');
var appTest = require('../test/main_test.js');

describe("Resource app test",function() {
  var app;
  before(function(){
    app = new appTest.recurso();
  });

  it('Debería agregar 3 recursos',function(){
    app.Agente();
    assert.deepEqual(app.agregarRecursos(2, 'core-duo, Mysql, MongoDB'), { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}, {id: 'R1', nombre: 'Mysql'}, {id: 'R2', nombre: 'MongoDB'}]});
  });
  it('Debería agregar un recurso',function(){
    app.Agente();
    assert.deepEqual(app.agregarRecursos(1,'Mysql'),{ id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}, {id: 'R1', nombre: 'Mysql'}]});
  });


  it('Debería ver los tipos de agente y contar',function(){
    assert.equal(app.summary('idle', [{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'firefox'},]},
    { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
    { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
    { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
    { id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
    { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
    { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}]), 3);
  });

  it('Debería poder eliminar un recurso',function(){
    app.Agente();
      assert.deepEqual(app.eliminarRecursos(0, 'firefox'),[{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
      { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
      { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
      { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}
      ]);
  });

  it('Debería poder eliminar 3 recursos',function(){
    app.Agente();
    var x = app.agregarRecursos(1,'MySQL ');
    var y = app.agregarRecursos(2,'MySQL, Ubuntu, core-duo');
    var z = app.eliminarRecursos(2, 'R2');
    var a = app.eliminarRecursos(2, 'R0');

    assert.deepEqual(app.eliminarRecursos(2, 'R1'), [{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'firefox'}]},
    { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'MySQL'}]},
    { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
    { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
    { id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
    { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
    { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}]);

  });

  it('Debería mostrar de acuerdo al tipo',function(){
      app.Agente();
      assert.deepEqual(app.mostrarAgentes('fisico'),[{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'firefox'}]},
      { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
      { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]}
      ]);

      assert.deepEqual(app.mostrarAgentes('virtual'),[{ id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
      { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
      { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}
      ]);

      assert.deepEqual(app.mostrarAgentes('all'),[{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'},{id: 'R1', nombre: 'firefox'}]},
      { id : 1 , tipo: 'fisico', url : 'bjstdmngbgr02.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.3' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 2 , tipo: 'fisico', url : 'bjstdmngbgr03.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.4' , directorio : '/var/lib/cruise-agent', recursos : []},
      { id : 3 , tipo: 'fisico', url : 'bjstdmngbgr04.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.5' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'Ubuntu'}]},
      { id : 4 , tipo: 'virtual', url : 'bjstdmngbgr05.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.6' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'firefox'}]},
      { id : 5 , tipo: 'virtual', url : 'bjstdmngbgr06.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.7' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]},
      { id : 6 , tipo: 'virtual', url : 'bjstdmngbgr07.thoughtworks.com' , estado : 'building' , direccionIP: '192.168.1.8' , directorio : '/var/lib/cruise-agent', recursos : [{id: 'R0', nombre: 'core-duo'}]}
      ]);

  });
});
