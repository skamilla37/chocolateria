var lista = document.querySelectorAll('.nav li');
function activarLink(){
    lista.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
lista.forEach((item) =>
    item.addEventListener('mouseover', activarLink));

var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.nav');
var container = document.querySelector('.container');

toggle.onclick = function() {
    nav.classList.toggle('active');
    container.classList.toggle('active');
}

function mostrarTabla() {
    var table = document.getElementById("miTabla");
    table.style.display = "table";
}

function ocultarTabla() {
    var table = document.getElementById("miTabla");
    table.style.display = "none";
}