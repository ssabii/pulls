import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null

const createWindow =  () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  mainWindow.loadURL('http://localhost:3000')
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