declare interface Window {
  tokenApi: import('../electron/IpcChannel/token').TokenApi;
  storeApi: import('../electron/IpcChannel/store').StoreApi;
}