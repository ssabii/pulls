import path from 'path'
import isDev from 'electron-is-dev';
import { app, BrowserWindow, ipcMain } from 'electron'
import { tokenChannels } from './IpcChannel/token';

let mainWindow: BrowserWindow | null

const createWindow =  () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
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
  ipcMain.handle(tokenChannels.get.name, tokenChannels.get.handle)
  ipcMain.handle(tokenChannels.set.name, tokenChannels.set.handle)

  createWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})