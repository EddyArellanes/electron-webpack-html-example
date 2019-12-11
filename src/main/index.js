'use strict'

//app: Handle Events and Lifecycle of the App
//BrowserWindow: Chromium Instance for Graphic Interface
const { app, BrowserWindow } = require('electron')
const config = require('./config/browserwindow')

let frontendPath = __dirname.split("\\")
frontendPath = frontendPath.splice(0,6)
frontendPath = frontendPath.join("/") 
//frontendPath = 'file://' + frontendPath + '/src/rendered/index.html'
frontendPath = 'file:///C:/Users/EDDY-ARELLANES/Documents/Test-Projects/Electron-HelloWorld/src/renderer/index.html'
app.on('ready', () => {
  let win = new BrowserWindow( config)

  win.once('ready-to-show', ()=> {
    win.show() 
  })

  win.on('move', () =>{
    const position = win.getPosition()
    //console.log( position)
  })
  win.on('closed', () => {
    win = null
    app.quit()
  })

  //win.loadURL('https://eddyarellanes.dev') //Appear when ready-to-show is Done
  console.log( "Path:",frontendPath)
  win.loadURL(frontendPath)
})

app.on('before-quit', () => {
  //Will call inside win.on closed 7u7
  console.log("Exiting...")
})
/*

//We used to execute this inside BrowserWindow on('closed)
app.quit()
*/

//To Be Continued
//https://platzi.com/clases/1124-electron/7983-propiedades-de-una-ventana-de-electron/