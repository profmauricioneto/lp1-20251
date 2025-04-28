let tarefas = require('./tarefas.json');

function obterTitulosDeTarefasConcluidas(tarefas) {
    return tarefas.filter((tarefa) => {
        return tarefa.isCompleted === true
    })
    .forEach((tarefa) => {
        console.log(tarefa.title);
    }); 
}

let tarefasConcluidas = obterTitulosDeTarefasConcluidas(tarefas);
console.log(tarefasConcluidas);
