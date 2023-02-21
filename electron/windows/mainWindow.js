
const path = require("path");

const { BrowserWindow, app } = require("electron");

//our window you can chanege the size  and other

let mainWindow = new BrowserWindow({
  show: true,
  height: 680,
  width: 950,
  useContentSize: true,
  // frame : false,
  webPreferences: {
    preload: path.join(__dirname, "./preload.js"),
    nodeIntegration: true
  },
});


if (app.isPackaged) {


  if (process.platform === "linux") {


    mainWindow.loadFile(`${__dirname}/../index.html`);


  } else {
    mainWindow.loadFile(path.join(__dirname, "../", "index.html"));
    // mainWindow.setMenu(null);
  }

} else {
  mainWindow.loadURL("http://localhost:3000");
}

// Automatically open Chrome's DevTools in development mode.
if (!app.isPackaged) {
  //  mainWindow.webContents.openDevTools();
}

//mainWindow.webContents.openDevTools();

//if the user click the cllose btn we close all app
mainWindow.on("close", (e) => {

    app.exit(0)
    app.quit();

});


module.exports = mainWindow;



