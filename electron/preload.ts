import { contextBridge } from 'electron';
import { tokenApi } from './IpcChannel/token';
import { storeApi } from './IpcChannel/store';

contextBridge.exposeInMainWorld('tokenApi', tokenApi);
contextBridge.exposeInMainWorld('storeApi', storeApi);
