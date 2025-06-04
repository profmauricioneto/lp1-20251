const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const path = require('path');
const si = require('systeminformation');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });
}

async function getSystemStats() {
  try {
    const cpuUsage = await si.currentLoad();
    const memory = await si.mem();
    return {
      cpu: cpuUsage.currentLoad.toFixed(2),
      memory: ((memory.active / memory.total) * 100).toFixed(2)
    };
  } catch (error) {
    console.error('Erro ao obter informações do sistema:', error);
  }
}

// Comunicação com o processo de renderização
ipcMain.handle('get-stats', async () => {
  return await getSystemStats();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
