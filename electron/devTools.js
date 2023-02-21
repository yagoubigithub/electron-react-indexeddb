const methode = DevTools.prototype;
const {BrowserWindow} = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS
} = require("electron-devtools-installer");
function DevTools(isDev){
     // devTools
  if (isDev) {
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = [REACT_DEVELOPER_TOOLS];
    installExtension(
          extensions,
          {loadExtensionOptions: {allowFileAccess: true}, forceDownload: forceDownload}
        )
        .catch(console.log);
        
              
  }

}
module.exports = DevTools;