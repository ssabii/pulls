import path from 'path';
import isDev from 'electron-is-dev';
import Store from 'electron-store';
import { app, BrowserWindow, ipcMain } from 'electron';
import { tokenChannels } from './IpcChannel/token';
import { storeChannels } from './IpcChannel/store';
import { themeChannels } from './IpcChannel/theme';

let mainWindow: BrowserWindow | null;

const createWindow =  () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      preload:path.join(__dirname, '../build/preload.js'),
    }
  });

  const url = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(url);

  if(isDev){
    mainWindow.webContents.openDevTools();
  }
};

app.whenReady().then(() => {
  Object
    .values(tokenChannels)
    .forEach(({ name, handle }) => {
      ipcMain.handle(name, handle);
    });
  Object
    .values(storeChannels)
    .forEach(({ name, handle }) => {
      ipcMain.handle(name, handle);
    });
  Object
    .values(themeChannels)
    .forEach(({ name, handle }) => {
      ipcMain.handle(name, handle);
    });
  Store.initRenderer();
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});