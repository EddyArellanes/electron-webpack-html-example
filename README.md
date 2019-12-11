# Webpack Electron use Pure HTML

This example is about how you can use Electron and Es6 Using only `HTML, CSS and Javascript`
Of course for Production oriented project the most recommended is Use a Framework like a Angular, React or Vue.


# Issues

- In this example HTML changes are not being tracked by the Webpack's Hot Module
-  xel(Framework CSS oriented for Windows-Mac) are not being recognized by the .html

# Installation
``` js
git clone https://github.com/EddyArellanes/electron-webpack-html-example.git
npm install
npm run dev
```
# Usage

The folder structure is the Webpack-electron from:
[Webpack-electron](https://webpack.electron.build/project-structure)

# Motivations
webpack compiler was deprecated and it had abstraced most of Webpack does, then now the best option to use Es6, Typescript and all stuff of moder JS is Webpack, and electron-webpack wrappe some stuff.



# Debug in Chromium console
Open your devtools and type:
``` js
require('devtron').install()
```