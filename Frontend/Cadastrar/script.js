function criar_tarefa(event) {
    event.preventDefault();

    let titulo = event.target.titulo.value;
    let descricao = event.target.descricao.value;
        fetch('http://localhost:3000/adicionar', {
    
        method: 'POST',
    
        headers: {
    
            'Content-Type': 'application/json'
    
        },
    
        body: JSON.stringify({
            "titulo": titulo,
            "descricao": descricao
        })
    
    })
    
        .then(response => response.json())
    
        .then(data => {
            window.location.href = "../index.html"
        })
    
        .catch(error => console.log(error));

}