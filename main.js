// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the main application window.
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // It's good practice to preload scripts, but for this simple app,
      // we can keep it straightforward.
      // Note: In modern Electron, nodeIntegration is false by default for security.
      // Our app code is all client-side, so this is perfectly fine.
    },
  });

  // Load the index.html file into the new window.
  mainWindow.loadFile('index.html');

  // Optional: Open the DevTools for debugging.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  // On macOS, it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});