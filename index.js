// Modules
const electron = require('electron');
const server = require('./server');
const app = electron.app;
const Browser = electron.BrowserWindow;

let win;

function createWindow() {
  win = new Browser({
    width: 800,
    height: 600,
  });

  win.loadURL('file://' + __dirname + '/public/index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

// Application Start Func
app.on('ready', createWindow);

// Application Closed(darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    ap.quit();
  }
})

app.on('activate', () => {
  if(win === null){
    createWindow();
  }
})
