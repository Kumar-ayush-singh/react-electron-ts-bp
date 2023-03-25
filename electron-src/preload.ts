import { contextBridge, IpcRenderer } from "electron";

contextBridge.exposeInMainWorld('API', {
    firstApi: "congratulation api is connected",
})