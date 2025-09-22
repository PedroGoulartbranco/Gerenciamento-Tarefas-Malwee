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
                div_card.style.height = "30vh"
                div_card.innerHTML = `<h5>ID: ${tarefa.id} <br>Título: ${tarefa.titulo}<br>Descrição: ${tarefa.descricao}<br>Concluída: ${tarefa.concluida}</h5><br><hr><a class="btn btn-success" id="botao_concluir_${tarefa.id}" onclick=concluir(${tarefa.id})>Concluir</a>`
    
                div_lista_tarefas.appendChild(div_card)

                let botao_concluir = document.getElementById(`botao_concluir_${tarefa.id}`)
                if (tarefa.concluida == true) {
                    botao_concluir.classList.remove("btn-success");   
                    botao_concluir.classList.add("btn-secondary"); 
                    botao_concluir.innerHTML = "Concluído"
                }

                div_lista_tarefas.style.display = "flex"
                div_lista_tarefas.style.flexWrap = "wrap"
                div_lista_tarefas.style.gap = "2vh"
            });
        })
    
        .catch(error => console.log(error));
}

function concluir(id) {
    let concluida = {
        "concluida": true
    }
  fetch(`http://localhost:3000/atualizar/${id}`, {
  
    method: 'PATCH',
  
    headers: {
  
        'Content-Type': 'application/json'
  
    },
  
    body: JSON.stringify(concluida)
  
  })
  
    .then(response => response.json())
  
    .then(data => console.log(data))
  
    .catch(error => console.log(error));
    window.location.reload()
}

window.onload = function() {
    carregar_tarefas()
};