function carregar_tarefas() {
    fetch('http://localhost:3000/tarefas')
    
        .then(response => response.json())
    
        .then(tarefas => {
            tarefas.forEach(tarefa => {
                console.log(tarefa)
            });
        })
    
        .catch(error => console.log(error));
}
alert("teste");
carregar_tarefas()