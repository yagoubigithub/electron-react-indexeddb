const { app } = require("electron");



app.on("ready", async () => {
 
  
  
  let mainWindow = require("./windows/mainWindow");

  //dev tools for installing extention help to develop


  const DevTools = require('./devTools')
  const devTools = new DevTools(!app.isPackaged);

});
