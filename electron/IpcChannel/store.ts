import { IpcMainInvokeEvent, ipcRenderer } from 'electron';
import Store, { Schema } from 'electron-store';

interface Preference {
  username: string;
}

type StoreKey = keyof Preference;
type StoreValue = Preference[StoreKey];

const schema: Schema<Preference> = {
  username: {
    type: 'string',
    default: '',
  },
};

const store = new Store<Preference>({ schema });

const channels = {
  getStore: 'getStore',
  setStore: 'setStore',
};

const getStore = async (key: StoreKey) => {
  return store.get(key);
};

const setStore = async (key: StoreKey, value: StoreValue) => {
  store.set(key, value);
};

interface StoreChannel {
  name: string;
  handle: (event: IpcMainInvokeEvent, ...args: unknown[]) => unknown;
}

interface StoreChannels {
  get: StoreChannel;
  set: StoreChannel;
}

export const storeChannels: StoreChannels = {
  get: {
    name: channels.getStore,
    handle: (_: IpcMainInvokeEvent, key: StoreKey) => getStore(key),
  },
  set: {
    name: channels.setStore,
    handle: (_: IpcMainInvokeEvent, key: StoreKey, value: StoreValue) => setStore(key, value),
  }
};

export const storeApi = {
  getStore: (key: StoreKey) => ipcRenderer.invoke(channels.getStore, key),
  setStore: (key: StoreKey, value: StoreValue) => ipcRenderer.invoke(channels.setStore, key, value),
};

export type StoreApi = {
  getStore: typeof getStore,
  setStore: typeof setStore,
}

export default store;