const switcher = document.querySelector('.btn-escuro');

switcher.addEventListener('click', function () {

    document.body.classList.toggle('tema-escuro');

    if(document.body.classList.contains('tema-escuro')){
        this.textContent = 'Claro';
    } else{
        this.textContent = 'Escuro'; 
    }

}); 

function getProjects(){
    const urlGithub = 'https://api.github.com/users/Ceci-rosa/repos'
    var loadingElement = document.getElementById('loading')
    fetch(urlGithub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display = 'none'
        showProjects(response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjects(data){
    var listElement = document.getElementById('meus-projetos-lista')
    for(let i = 0; i < data.length; i++){
        let a = document.createElement('a')
        a.href = data[i]['clone-url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

getProjects()