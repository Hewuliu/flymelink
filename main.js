// 在文件头部引入 Node.js 中的 path 模块
const path = require('path')
// app 它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const { app, BrowserWindow } = require('electron');

// 创建浏览器窗口
function createWindow () {
    //__dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)
    const mainWindow = new BrowserWindow({
        // width: 1920,
        // height: 1080,
        show : false,
      })
      mainWindow.maximize()
      mainWindow.show()
      // 本地文件
      //mainWindow.loadFile('index.html')
      // 线上页面
      mainWindow.loadURL('https://linkpc.flyme.com/')
      // 打开控制台
      mainWindow.webContents.openDevTools()

};

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

// 部分 API 在 ready 事件触发后才能使用。
// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
      // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他打开的窗口，那么程序会重新创建一个窗口。
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
