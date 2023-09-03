import { contextBridge } from 'electron';
import { tokenApi } from './IpcChannel/token';
import { storeApi } from './IpcChannel/store';
import { themeApi } from './IpcChannel/theme';

contextBridge.exposeInMainWorld('tokenApi', tokenApi);
contextBridge.exposeInMainWorld('storeApi', storeApi);
contextBridge.exposeInMainWorld('themeApi', themeApi);
