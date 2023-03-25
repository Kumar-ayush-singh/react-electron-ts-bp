import { app, BrowserWindow } from "electron";
import path from "path";
import Main from "./electron-main";

Main.main(app, BrowserWindow, path.join(__dirname, 'preload.js'));