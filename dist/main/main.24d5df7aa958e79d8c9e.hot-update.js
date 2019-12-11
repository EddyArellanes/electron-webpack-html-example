exports.id = "main";
exports.modules = {

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" //app: Handle Events and Lifecycle of the App\n//BrowserWindow: Chromium Instance for Graphic Interface\n\nconst {\n  app,\n  BrowserWindow\n} = __webpack_require__(/*! electron */ \"electron\");\n\nconst config = __webpack_require__(/*! ./config/browserwindow */ \"./src/main/config/browserwindow.js\");\n\nlet frontendPath = __dirname.split(\"\\\\\");\n\nfrontendPath = frontendPath.splice(0, 6);\nfrontendPath = frontendPath.join(\"/\"); //frontendPath = 'file://' + frontendPath + '/src/rendered/index.html'\n\nfrontend;\napp.on('ready', () => {\n  let win = new BrowserWindow(config);\n  win.once('ready-to-show', () => {\n    win.show();\n  });\n  win.on('move', () => {\n    const position = win.getPosition(); //console.log( position)\n  });\n  win.on('closed', () => {\n    win = null;\n    app.quit();\n  }); //win.loadURL('https://eddyarellanes.dev') //Appear when ready-to-show is Done\n\n  console.log(\"Path:\", frontendPath);\n  win.loadURL(frontendPath);\n});\napp.on('before-quit', () => {\n  //Will call inside win.on closed 7u7\n  console.log(\"Exiting...\");\n});\n/*\r\n\r\n//We used to execute this inside BrowserWindow on('closed)\r\napp.quit()\r\n*/\n//To Be Continued\n//https://platzi.com/clases/1124-electron/7983-propiedades-de-una-ventana-de-electron///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9pbmRleC5qcz9lNTlhIl0sIm5hbWVzIjpbImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJyZXF1aXJlIiwiY29uZmlnIiwiZnJvbnRlbmRQYXRoIiwiX19kaXJuYW1lIiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZnJvbnRlbmQiLCJvbiIsIndpbiIsIm9uY2UiLCJzaG93IiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInF1aXQiLCJjb25zb2xlIiwibG9nIiwibG9hZFVSTCJdLCJtYXBwaW5ncyI6IkNBRUE7QUFDQTs7QUFDQSxNQUFNO0FBQUVBLEtBQUY7QUFBT0M7QUFBUCxJQUF5QkMsbUJBQU8sQ0FBQywwQkFBRCxDQUF0Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsa0VBQUQsQ0FBdEI7O0FBRUEsSUFBSUUsWUFBWSxHQUFHQyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBbkI7O0FBQ0FGLFlBQVksR0FBR0EsWUFBWSxDQUFDRyxNQUFiLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQWY7QUFDQUgsWUFBWSxHQUFHQSxZQUFZLENBQUNJLElBQWIsQ0FBa0IsR0FBbEIsQ0FBZixDLENBQ0E7O0FBQ0FDLFFBQVE7QUFDUlQsR0FBRyxDQUFDVSxFQUFKLENBQU8sT0FBUCxFQUFnQixNQUFNO0FBQ3BCLE1BQUlDLEdBQUcsR0FBRyxJQUFJVixhQUFKLENBQW1CRSxNQUFuQixDQUFWO0FBRUFRLEtBQUcsQ0FBQ0MsSUFBSixDQUFTLGVBQVQsRUFBMEIsTUFBSztBQUM3QkQsT0FBRyxDQUFDRSxJQUFKO0FBQ0QsR0FGRDtBQUlBRixLQUFHLENBQUNELEVBQUosQ0FBTyxNQUFQLEVBQWUsTUFBSztBQUNsQixVQUFNSSxRQUFRLEdBQUdILEdBQUcsQ0FBQ0ksV0FBSixFQUFqQixDQURrQixDQUVsQjtBQUNELEdBSEQ7QUFJQUosS0FBRyxDQUFDRCxFQUFKLENBQU8sUUFBUCxFQUFpQixNQUFNO0FBQ3JCQyxPQUFHLEdBQUcsSUFBTjtBQUNBWCxPQUFHLENBQUNnQixJQUFKO0FBQ0QsR0FIRCxFQVhvQixDQWdCcEI7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLE9BQWIsRUFBcUJkLFlBQXJCO0FBQ0FPLEtBQUcsQ0FBQ1EsT0FBSixDQUFZZixZQUFaO0FBQ0QsQ0FuQkQ7QUFxQkFKLEdBQUcsQ0FBQ1UsRUFBSixDQUFPLGFBQVAsRUFBc0IsTUFBTTtBQUMxQjtBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0QsQ0FIRDtBQUlBOzs7OztBQU1BO0FBQ0EiLCJmaWxlIjoiLi9zcmMvbWFpbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy9hcHA6IEhhbmRsZSBFdmVudHMgYW5kIExpZmVjeWNsZSBvZiB0aGUgQXBwXHJcbi8vQnJvd3NlcldpbmRvdzogQ2hyb21pdW0gSW5zdGFuY2UgZm9yIEdyYXBoaWMgSW50ZXJmYWNlXHJcbmNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL2Jyb3dzZXJ3aW5kb3cnKVxyXG5cclxubGV0IGZyb250ZW5kUGF0aCA9IF9fZGlybmFtZS5zcGxpdChcIlxcXFxcIilcclxuZnJvbnRlbmRQYXRoID0gZnJvbnRlbmRQYXRoLnNwbGljZSgwLDYpXHJcbmZyb250ZW5kUGF0aCA9IGZyb250ZW5kUGF0aC5qb2luKFwiL1wiKSBcclxuLy9mcm9udGVuZFBhdGggPSAnZmlsZTovLycgKyBmcm9udGVuZFBhdGggKyAnL3NyYy9yZW5kZXJlZC9pbmRleC5odG1sJ1xyXG5mcm9udGVuZFxyXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xyXG4gIGxldCB3aW4gPSBuZXcgQnJvd3NlcldpbmRvdyggY29uZmlnKVxyXG5cclxuICB3aW4ub25jZSgncmVhZHktdG8tc2hvdycsICgpPT4ge1xyXG4gICAgd2luLnNob3coKSBcclxuICB9KVxyXG5cclxuICB3aW4ub24oJ21vdmUnLCAoKSA9PntcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luLmdldFBvc2l0aW9uKClcclxuICAgIC8vY29uc29sZS5sb2coIHBvc2l0aW9uKVxyXG4gIH0pXHJcbiAgd2luLm9uKCdjbG9zZWQnLCAoKSA9PiB7XHJcbiAgICB3aW4gPSBudWxsXHJcbiAgICBhcHAucXVpdCgpXHJcbiAgfSlcclxuXHJcbiAgLy93aW4ubG9hZFVSTCgnaHR0cHM6Ly9lZGR5YXJlbGxhbmVzLmRldicpIC8vQXBwZWFyIHdoZW4gcmVhZHktdG8tc2hvdyBpcyBEb25lXHJcbiAgY29uc29sZS5sb2coIFwiUGF0aDpcIixmcm9udGVuZFBhdGgpXHJcbiAgd2luLmxvYWRVUkwoZnJvbnRlbmRQYXRoKVxyXG59KVxyXG5cclxuYXBwLm9uKCdiZWZvcmUtcXVpdCcsICgpID0+IHtcclxuICAvL1dpbGwgY2FsbCBpbnNpZGUgd2luLm9uIGNsb3NlZCA3dTdcclxuICBjb25zb2xlLmxvZyhcIkV4aXRpbmcuLi5cIilcclxufSlcclxuLypcclxuXHJcbi8vV2UgdXNlZCB0byBleGVjdXRlIHRoaXMgaW5zaWRlIEJyb3dzZXJXaW5kb3cgb24oJ2Nsb3NlZClcclxuYXBwLnF1aXQoKVxyXG4qL1xyXG5cclxuLy9UbyBCZSBDb250aW51ZWRcclxuLy9odHRwczovL3BsYXR6aS5jb20vY2xhc2VzLzExMjQtZWxlY3Ryb24vNzk4My1wcm9waWVkYWRlcy1kZS11bmEtdmVudGFuYS1kZS1lbGVjdHJvbi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/index.js\n");

/***/ })

};