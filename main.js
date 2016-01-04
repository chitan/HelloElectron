'use strict'

// load electron modules
var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

// define cloase all window
app.on('window-all-closed', function(){
    if(process.platform != 'darwin'){
        app.quit();
    }
});

app.on('ready', function(){
    // create window
    mainWindow = new BrowserWindow(
        { width: 800, height: 600}
    );
    // load index.html
    mainWindow.loadUrl(
        'file://' + __dirname + '/index.html'
    );
    mainWindow.on('closed',function(){
        mainWindow = null;
    });
});