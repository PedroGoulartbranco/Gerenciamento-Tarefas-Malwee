let div_lista_tarefas = document.getElementById("lista_tarefas")

function carregar_tarefas() {
    fetch('http://localhost:3000/tarefas')
    
        .then(response => response.json())
    
        .then(tarefas => {
            tarefas.forEach(tarefa => {
                let div_card = document.createElement("div");
                div_card.className = "card"
                div_card.style.backgroundColor = "white"
                div_card.style.width = "45vh"
                div_card.style.height = "40vh"
                div_card.innerHTML = `<h5>ID: ${tarefa.id} <br>Título: ${tarefa.titulo}<br>Descrição: ${tarefa.descricao}<br>Concluída: ${tarefa.concluida}</h5>`
                div_lista_tarefas.appendChild(div_card)
            });
        })
    
        .catch(error => console.log(error));
}

carregar_tarefas()