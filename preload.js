const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('api', {
  askGemini: (prompt) => ipcRenderer.invoke('ask-gemini', prompt)
});
