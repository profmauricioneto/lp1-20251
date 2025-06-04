const {ipcRenderer} = require('electron');
const btnSend = document.querySelector('#btn-send');

btnSend.addEventListener('click', () => {
    ipcRenderer.send('canal-mensagem', 'Mensagem sendo enviada da Renderer');
});

ipcRenderer.on('canal-resposta', (event, message) => {
    console.log('Resposta vinda da Main:', message);
    
});

const btnBidirecional = document.getElementById('btn-doublesend');
btnBidirecional.addEventListener('click', async () => {
    const response = await ipcRenderer.invoke('request-data', {key: 'value'});
    console.log('Recebendo mensagem da main:', response);
});
