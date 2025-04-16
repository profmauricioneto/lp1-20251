// primeiro forma
function modificarLista() {
    let lista = document.querySelectorAll('ul li');

    lista.forEach(function(element) {
        element.innerHTML = 'Item Modificado';
    });
}

// segunda forma
let lista = document.querySelectorAll('ul li');
let botao = document.getElementById('btnModificar');

botao.addEventListener('click', function() {
    lista.forEach(function(element) {
        element.innerHTML = '<b>Item Modificado</b>';
    });
})
