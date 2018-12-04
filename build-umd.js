const fs = require('fs')
const regate = require('./dist/regate')

// TODO: is it possible with webpack?
console.log('Building Regate JavaScript Standalone files')

const regateComponents = Object.keys(regate)



regateComponents.forEach(component => {
  console.log(component)
  var code = fs.readFileSync(`./dist/${component}.js`, 'utf8')

  code = code.replace(/\"/g, "'")
  code = code.replace('exports.default = ', `window.Regate.${component} = `)
  code = code.replace("Object.defineProperty(exports, '__esModule', ", 'var smile = function() {}; smile(')
  code = code.replace("'use strict';", '')

  code = `;(function () {
    window.Regate = window.Regate || {};
    ${code}
  }());`
  
  fs.writeFileSync(`./docs/dashmix/regate-dist/${component}.js`, code)
})
