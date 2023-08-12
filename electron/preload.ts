import { contextBridge } from 'electron';

const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
}

contextBridge.exposeInMainWorld('versions', versions)

export type Versions = typeof versions
