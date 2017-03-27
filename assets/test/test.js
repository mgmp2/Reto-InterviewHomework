var assert    = require('assert');
var appTest = require('main_test.js');

describe("Resource app test",function() {
  var app;
  before(function(){
    app = new appTest.recurso();
  });
  //{ id : 0 , tipo: 'fisico', url : 'bjstdmngbgr01.thoughtworks.com' , estado : 'idle' , direccionIP: '192.168.1.2' , directorio : '/var/lib/cruise-agent', recursos : ['Ubuntu','firefox','core-duo']},

  it('Debería agregar un recurso',function(){
    // assert.equal(app.hola(),"Hola");
  });

  it('Debería agregar 3 recursos',function(){

  });

  it('Debería ver los tipos de agente y contar',function(){

  });

  it('Debería poder eliminar un recurso',function(){

  });

  it('Debería poder eliminar 3 recursos',function(){

  });

  it('Debería actualizar el localStorage',function(){

  });
});
