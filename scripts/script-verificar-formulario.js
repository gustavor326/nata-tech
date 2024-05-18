// script-verificar-formulario.js
document.querySelector('form').addEventListener('submit', function(event) {
    var inputs = document.querySelectorAll('input');
    var textareas = document.querySelectorAll('textarea');
    var isEmpty = false;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            inputs[i].style.borderColor = 'red';
            inputs[i].classList.add('empty-input');
            inputs[i].placeholder = 'Você não pode deixar esse campo em branco.';
            isEmpty = true;
        } else {
            inputs[i].style.borderColor = '';
            inputs[i].classList.remove('empty-input');
            inputs[i].placeholder = 'Obrigatório';
        }
    }

    for (var i = 0; i < textareas.length; i++) {
        if (textareas[i].value.trim() === '') {
            textareas[i].style.borderColor = 'red';
            textareas[i].classList.add('empty-input');
            textareas[i].placeholder = 'Você não pode deixar esse campo em branco.';
            isEmpty = true;
        } else {
            textareas[i].style.borderColor = '';
            textareas[i].classList.remove('empty-input');
            textareas[i].placeholder = 'Obrigatório';
        }
    }

    if (isEmpty) {
        event.preventDefault();
    }
});