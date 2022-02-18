// import { ipcRenderer } from 'electron'
const { contextBridge, ipcRenderer} = require('electron')

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "ipcRenderer", {
        send: (channel, data) => {
            // whitelist channels
            let validChannels = ["openKeyboard", "hideKeyboard"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
            return true
        },
        receive: (channel, func) => {
            let validChannels = ["keyboardClose"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);

// alert("It Worked!")

