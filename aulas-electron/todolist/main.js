const { app, BrowserWindow, ipcMain } = require("electron");

let tasks = [{ text: "teste", completed: true }];

const startWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadFile("index.html");
};

app
  .whenReady()
  .then(() => {
    startWindow();
  })
  .catch((error) => {
    console.log(error);
  });

// handles do processo main
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
