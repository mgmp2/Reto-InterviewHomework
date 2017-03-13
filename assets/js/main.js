
var btnHelp = document.getElementById('btnHelp');
var btnCruise = document.getElementById('btnCruise');
btnHelp.addEventListener('click',function(e){
  e.preventDefault();
  document.getElementById('content-myCruise').style.display = "none";
  document.getElementById('content-dasboard').style.display = "block";
});
btnCruise.addEventListener('click',function(e){
  document.getElementById('content-dasboard').style.display = "none";
  e.preventDefault();
  document.getElementById('content-myCruise').style.display = "block";
});
