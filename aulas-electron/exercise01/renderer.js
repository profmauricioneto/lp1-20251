const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  // Carregar as tarefas existentes, se houver
  ipcRenderer.send("task-updated"); // Envia uma mensagem para carregar as tarefas

  // Ouve as tarefas atualizadas
  ipcRenderer.on("task-updated", (event, tasks) => {
    renderTasks(tasks); // Atualiza a UI com a lista de tarefas
  });

  // Adicionar nova tarefa
  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
      ipcRenderer.send("add-task", taskText); // Envia a tarefa para o processo principal
      taskInput.value = ""; // Limpa o campo de entrada
    }
  });
});

// Função para renderizar a lista de tarefas
function renderTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Limpar a lista atual
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.completed);
    li.innerHTML = ` ${task.text} <button class="delete-btn" data-index="${index}">X</button>`;

    // Marcar tarefa como concluída
    li.addEventListener("click", () => {
      ipcRenderer.send("toggle-task", index); // Envia a mudança de estado da tarefa
    });

    // Remover tarefa
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede a ativação do evento de clique da tarefa
      ipcRenderer.send("remove-task", index); // Envia a remoção da tarefa
    });

    taskList.appendChild(li);
  });
}