function listaCompleta(){
  var http = new XMLHttpRequest();
  http.open('GET', 'https://jsonplaceholder.typicode.com/users');
  http.send();

  http.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){
    var datos = JSON.parse(this.responseText);
    var info = document.querySelector('#users');
    info.innerHTML = '';

   for (var dato of datos){
     info.innerHTML += '<td>' + dato.name + '</td>' + '<td>' + dato.username + '</td>' + '<td>' + dato.email + '</td>' + '<td>' + dato.address.city + '</td>' + '<td>' + dato.phone + '</td>' + '<td>' + dato.website + '</td>';
    }
  }
  }
}
 listaCompleta();
document.querySelector('#completo').addEventListener('click', function(){
 listaCompleta();
});
document.querySelector('#nombre').addEventListener('click', function(){
  var http = new XMLHttpRequest();
  http.open('GET', 'https://jsonplaceholder.typicode.com/users');
  http.send();

  http.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){
    var datos = JSON.parse(this.responseText);
    var info = document.querySelector('#users');
    info.innerHTML = '';

   for (var dato of datos){
     info.innerHTML += '<td>' + dato.name + '</td>' + '<td></td>' + '<td></td>' + '<td></td>' + '<td></td>' + '<td></td>';
    }
  }
 }
});

document.querySelector('#email').addEventListener('click', function(){
  var http = new XMLHttpRequest();
  http.open('GET', 'https://jsonplaceholder.typicode.com/users');
  http.send();

  http.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){
    var datos = JSON.parse(this.responseText);
    var info = document.querySelector('#users');
    info.innerHTML = '';

   for (var dato of datos){
     info.innerHTML += '<td></td>' + '<td></td>' + '<td>' + dato.email + '</td>' + '<td></td>' + '<td></td>' + '<td></td>';
    }
  }
 }
});
