import { IpcMainInvokeEvent, ipcRenderer, nativeTheme } from "electron";

const channels = {
  setTheme: 'setTheme'
};

export type Theme = 'light' | 'dark' | 'system';

const setTheme = async (theme: Theme) => {
  nativeTheme.themeSource = theme;
};

export const themeChannels = {
  set: {
    name: channels.setTheme,
    handle: (_: IpcMainInvokeEvent, theme: Theme) => setTheme(theme),
  }
};

export const themeApi = {
  setTheme: (theme: Theme) => ipcRenderer.invoke(channels.setTheme, theme),
};

export type ThemeApi = {
  setTheme: typeof setTheme,
};