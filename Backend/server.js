const express = require('express');
const cors =  require('cors');

const app = express();

const porta = 3000;

app.use(express.json());
app.use(cors());

const tarefas = [
    {"id": 1, "titulo": "Lavar a roupa", "concluida": false},
    {"id": 2, "titulo": "Comprar banana", "concluida": false}
]

let proximo_id = 3;

app.get("/tarefas", (req, res) => {
    res.send(tarefas)
})

app.listen(porta, ()  => {
    console.log("http://localhost:3000")
})