import path from 'path'
import isDev from 'electron-is-dev';
import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null

const createWindow =  () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload:path.join(__dirname, '../build/preload.js'),
    }
  })

  const url = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`

  mainWindow.loadURL(url)

  if(isDev){
    mainWindow.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
