const {app, BrowserWindow, ipcMain} = require('electron');

function createWindow() {
    const window = new BrowserWindow ({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('canal-mensagem', (event, message) => {
    console.log('Mensagem sendo recebida com sucesso. ');
    console.log(`Mensagem: ${new String(message)}`);

    event.reply('canal-resposta', 'mensagem sendo enviada para a renderer')
});

ipcMain.handle('request-data', async (event, data) => {
    console.log('Dados recebidos pelo RENDERER :', data);
    return 'Respondendo a renderer pela Main';
})
