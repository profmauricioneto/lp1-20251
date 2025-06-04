const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("task-updated");
  ipcRenderer.on("task-updated", (event, tasks) => {
    renderTasks(tasks);
  });

  // Adicionar nova tarefa
  document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
      ipcRenderer.send("add-task", taskText);
      principal;
      taskInput.value = "";
    }
  });
});

function renderTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.completed);
    li.innerHTML = `
            ${task.text}
            <button class="delete-btn" data-index="${index}">X</button>
        `;
    li.addEventListener("click", () => {
      ipcRenderer.send("toggle-task", index);
    });
    // Remover tarefa
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      ipcRenderer.send("remove-task", index);
    });
    taskList.appendChild(li);
  });
}
