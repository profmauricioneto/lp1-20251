const { contextBridge, ipcRenderer } = require('electron');

// Expondo funções ao processo de renderização
contextBridge.exposeInMainWorld('electron', {
  getStats: () => ipcRenderer.invoke('get-stats'), // Comunicação segura com o processo principal
});