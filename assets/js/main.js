
// var btnAgents = document.getElementById('btnAgents');
btnAgents.addEventListener('click',function(e){
  e.preventDefault();
  document.getElementById('content-agents').style.display = "block";
  document.getElementById('content-agents').innerHTML = mostrarAgentes(usuarios);
});

var mostrarAgentes = function(array){
  var mensaje = "";
  array.forEach(function(e){
    return mensaje += e.email;
  });
  return mensaje;
}

var createHTMLPost = function(text,id) {
    var post = document.createElement('div');
    post.setAttribute('data-id',id)
    var p = document.createElement('p');
    p.innerHTML = text;

    var editar = document.createElement('a');
    editar.setAttribute('href',"#");
    editar.setAttribute('data-edit-mode',false);
    editar.innerHTML = "Editar";
    editar.addEventListener('click',function(e) {
      e.preventDefault();
      if (e.target.getAttribute('data-edit-mode') === 'false') {
        e.target.innerHTML = "Guardar";
        var editText = e.target.parentNode.getElementsByTagName('p')[0].innerHTML;

        var editTextarea = document.createElement('textarea');
        editTextarea.value = editText;
        e.target.parentNode.insertBefore(editTextarea,p);
        e.target.parentNode.insertBefore(document.createElement('br'),e.target);
        e.target.parentNode.removeChild(p);
      } else {
        e.target.innerHTML = "Guardar";
      }
      var postId = e.target.parentNode.getAttribute('data-id');

    });

    var eliminar = document.createElement('a');
    eliminar.setAttribute('href',"#");
    eliminar.innerHTML = "Eliminar"
    eliminar.addEventListener('click',function(e) {
      e.preventDefault();
      var postId = e.target.parent.getAttribute('data-id');

    });
    post.appendChild(p);
    post.appendChild(editar);
    post.appendChild(eliminar);
    return post;
}
