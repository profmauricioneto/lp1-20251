const { app, BrowserWindow } = require('electron');

const startWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadFile('index.html');
}

app.whenReady().then(() => {
    startWindow()
}).catch((error) => {
    console.log(error);
})