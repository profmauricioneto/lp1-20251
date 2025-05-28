const { app, BrowserWindow } = require('electron');

const myWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadFile('index.html');
}

app.whenReady().then(() => {
    myWindow();
})