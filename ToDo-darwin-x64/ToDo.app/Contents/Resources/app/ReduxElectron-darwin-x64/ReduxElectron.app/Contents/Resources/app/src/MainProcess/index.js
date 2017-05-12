// Electron
import {
  app,
  BrowserWindow,
} from 'electron'

// アプリ起動時の処理
app.on('ready', () => {
  const winSetting = { width: 800, height: 600 }
  const mainWindow = new BrowserWindow(winSetting)
  // mainWindow.openDevTools()
  mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`)
})

// アプリ終了時の処理
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
