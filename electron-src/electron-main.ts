import{ BrowserWindow } from 'electron';
import path from 'path';

export default class Main {
    private static mainWindow: Electron.BrowserWindow | null;
    private static application: Electron.App;
    private static BrowserWindow: typeof BrowserWindow;
    private static preload: string;


    static isDev():boolean {
        for(let i=0; i<process.argv.length; i++){
            if(process.argv[i] === '--dev'){
                return true;
            }
        }
        return false;
    }

    private static onWindowAllClosed(){
        if(process.platform !== 'darwin'){
            Main.application.quit();
        }
    }

    private static onClose(){
        //Deference the window object.
        Main.mainWindow = null;
    }

    private static onReady(){
        Main.mainWindow = new Main.BrowserWindow({ 
            width: 800, 
            height: 600,
            webPreferences: {
                preload: Main.preload,
                devTools: true,
            }
        });

        if(Main.isDev()){
            //only for development purpose
            Main.mainWindow?.loadURL('http://192.168.29.81:3000');
        } else{
            Main.mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
        }
        Main.mainWindow.on('close', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow, preload: string){
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
        Main.preload = preload;
    }
}