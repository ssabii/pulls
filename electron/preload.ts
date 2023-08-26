import { contextBridge, ipcRenderer } from 'electron';

const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
}

contextBridge.exposeInMainWorld('versions', versions)

const dialog = {
  openFile: () => ipcRenderer.invoke('dialog:openFile')
}

contextBridge.exposeInMainWorld('dialog', dialog)

export type Versions = typeof versions
export type Dialog = typeof dialog
