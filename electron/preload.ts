import { contextBridge } from 'electron';
import { tokenApi } from './IpcChannel/token';

contextBridge.exposeInMainWorld('tokenApi', tokenApi);
