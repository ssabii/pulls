import { IpcMainInvokeEvent, ipcRenderer } from 'electron';
import keytar from 'keytar';

const channels = {
  getToken: 'getToken',
  setToken: 'setToken',
};

const getToken = () => {
  return keytar.getPassword('pulls', 'test');
};

const setToken = async (token: string) => {
  keytar.setPassword('pulls', 'test', token);
};

interface IpcChannel {
  name: string;
  handle: (event: IpcMainInvokeEvent, ...args: unknown[]) => unknown;
}

interface IpcChannels {
  get: IpcChannel;
  set: IpcChannel;
}

// Main Process
export const tokenChannels: IpcChannels = {
  get: {
    name: channels.getToken,
    handle: () => getToken(),
  },
  set: {
    name: channels.setToken,
    handle: (_: IpcMainInvokeEvent, token: string) => setToken(token),
  }
};

// Context Bridge
export const tokenApi = {
  getToken: () => ipcRenderer.invoke(channels.getToken),
  setToken: (token: string) => ipcRenderer.invoke(channels.setToken, token),
};

// Renderer Process
export type TokenApi = {
  getToken: typeof getToken,
  setToken: typeof setToken,
}