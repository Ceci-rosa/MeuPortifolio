const switcher = document.querySelector('.btn-escuro');

switcher.addEventListener('click', function () {

    document.body.classList.toggle('tema-escuro');

    if(document.body.classList.contains('tema-escuro')){
        this.textContent = 'Claro';
    } else{
        this.textContent = 'Escuro';
    }

});