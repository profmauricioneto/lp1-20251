const { app, BrowserWindow, ipcMain } = require("electron");

let tasks = []; // Array para armazenar as tarefas em memória

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Necessário para require no renderer.js
      contextIsolation: false, 
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Handles das tasks
ipcMain.on("task-updated", (event) => {
  event.sender.send("task-updated", tasks);
});

ipcMain.on("add-task", (event, taskText) => {
  tasks.push({ text: taskText, completed: false });
  event.sender.send("task-updated", tasks);
});

ipcMain.on("remove-task", (event, index) => {
  tasks.splice(index, 1);
  event.sender.send("task-updated", tasks);
});

ipcMain.on("toggle-task", (event, index) => {
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
  }
  event.sender.send("task-updated", tasks);
});
