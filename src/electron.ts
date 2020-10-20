import { BrowserWindow, app } from 'electron';
import * as path from 'path';

class Soundbeat {

    static win: BrowserWindow | null;
    static application: Electron.App;

    constructor() {
        Soundbeat.application = app;
        Soundbeat.application.on('ready', Soundbeat.createWindow);
        Soundbeat.application.on('window-all-closed', Soundbeat.onWindowAllClosed);
        Soundbeat.application.on('activate', Soundbeat.onActivate);
    }

    private static createWindow() {
        Soundbeat.win = new BrowserWindow({
            width: 1440,
            height: 900,
            webPreferences: {
                nodeIntegration: true,
                worldSafeExecuteJavaScript: false
            },
            titleBarStyle: 'hidden'
        });
        Soundbeat.win.on('closed', Soundbeat.onClosed);
        // Soundbeat.win.webContents.openDevTools();
        Soundbeat.win.loadFile(path.join(__dirname + '/bundle.html'));
    }

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Soundbeat.application.quit();
        }
    }

    private static onActivate() {
        if (Soundbeat.win === null) {
            Soundbeat.createWindow();
        }
    }

    private static onClosed() {
        Soundbeat.win = null;
    }
}

new Soundbeat();