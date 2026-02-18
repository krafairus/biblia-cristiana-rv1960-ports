const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) app.quit();

let mainWindow;
const stateFilePath = path.join(app.getPath('userData'), 'window-state.json');

function loadWindowState() {
    try {
        if (fs.existsSync(stateFilePath)) {
            return JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
        }
    } catch (e) {
        console.error("Error loading window state", e);
    }
    return { width: 1200, height: 800 };
}

function saveWindowState() {
    if (!mainWindow) return;
    const bounds = mainWindow.getBounds();
    try {
        fs.writeFileSync(stateFilePath, JSON.stringify(bounds));
    } catch (e) {
        console.error("Error saving window state", e);
    }
}

function createWindow() {
    const isDev = !app.isPackaged;
    const state = loadWindowState();

    mainWindow = new BrowserWindow({
        x: state.x,
        y: state.y,
        width: state.width,
        height: state.height,
        minWidth: 800,
        minHeight: 600,
        frame: false, // Frame-less for custom title bar
        maximizable: true, // Allow double click to maximize
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
        icon: path.join(__dirname, '../public/icon.png')
    });

    // In development, load from Vite dev server
    if (isDev) {
        mainWindow.loadURL('http://localhost:5173').catch(() => {
            console.log("Servidor no listo, reintentando...");
            setTimeout(() => mainWindow.loadURL('http://localhost:5173'), 1000);
        });
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }

    // Handle Window Controls
    ipcMain.on('window-minimize', () => mainWindow.minimize());
    ipcMain.on('window-toggle-maximize', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    });
    ipcMain.on('window-close', () => mainWindow.close());

    // Update maximization state to renderer
    mainWindow.on('maximize', () => mainWindow.webContents.send('window-maximized-state', true));
    mainWindow.on('unmaximize', () => mainWindow.webContents.send('window-maximized-state', false));

    // Save state on close/resize
    mainWindow.on('close', saveWindowState);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
