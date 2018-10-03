// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const swarm = require('discovery-swarm');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:8080/');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const sw = swarm();

sw.on('peer', (peer) => {
  // console.log('found peer', peer);
  console.log('found peer');
});

sw.on('peer-banned', (peerAddress, details) => {
  // console.log('peer banned', peerAddress, details);
  console.log('peer banned');
});

sw.on('peer-rejected', (peerAddress, details) => {
  // console.log('peer rejected', peerAddress, details);
  console.log('peer rejected');
});

sw.on('drop', (peer) => {
  // console.log('peer dropped', peer);
  console.log('peer dropped');
});

sw.on('connecting', (peer) => {
  // console.log('connecting', peer);
  console.log('connecting');
});

sw.on('connect-failed', (peer, details) => {
  // console.log('connect failed', peer, details);
  console.log('connect failed');
});

sw.on('handshaking', (connection, info) => {
  // console.log('handshaking', connection, info);
  console.log('handshaking');
});

sw.on('handshake-timeout', (connection, info) => {
  // console.log('handshake timeout', connection, info);
  console.log('handshake timeout');
});

sw.on('connection', (connection, info) => {
  // console.log('connection', connection, info);
  console.log('connection');
});

sw.on('connection-closed', (connection, info) => {
  // console.log('connection closed', connection, info);
  console.log('connection closed');
});

sw.on('redundant-connection', (connection, info) => {
  // console.log('redundant connection', connection, info);
  console.log('redundant connection');
});

sw.listen(3000);
sw.join('wolfadex__fractal-timeline__test');
