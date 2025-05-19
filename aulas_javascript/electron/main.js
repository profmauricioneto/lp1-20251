const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.handle("save-note", async (event, content) => {
  const { filepath } = await dialog.showSaveDialog({
    defaultPath: "note.md",
    filters: [{ name: "Markdown Files", extensions: ["md"] }],
  });

  if (filePath) {
    fs.writeFileSync(filePath, content);
    return "success";
  }
  return "cancel";
});
