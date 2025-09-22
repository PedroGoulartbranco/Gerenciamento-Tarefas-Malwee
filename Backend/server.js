const express = require('express');
const cors =  require('cors');

const app = express();

const porta = 3000;

app.use(express.json());
app.use(cors());

const tarefas = [
    {"id": 1, "titulo": "Lavar a roupa", "descricao": "Lavar as roupas sujas do cesto","concluida": false},
    {"id": 2, "titulo": "Comprar banana", "descricao": "Comprar bananas","concluida": false}
]

let proximo_id = 3;

app.get("/tarefas", (req, res) => {
    res.send(tarefas)
})

app.post("/adicionar", (req, res) => {
    const nova_tarefa = req.body;
    nova_tarefa.id = proximo_id++;
    nova_tarefa.concluida = false;
    tarefas.push(nova_tarefa);

    res.status(201).send(nova_tarefa)
})

app.patch("/atualizar/:id", (req, res) => {
    const id_tarefa = parseInt(req.params.id);
    const tarefa = tarefas.find(id_achar => id_achar.id === id_tarefa)
    const atualizacao = req.body
    if (tarefa) {
        tarefa.concluida = atualizacao.concluida
        res.status(202).send(tarefa)
    } else {
        res.status(404).send("Erro")
    }
})

app.listen(porta, ()  => {
    console.log("http://localhost:3000")
})