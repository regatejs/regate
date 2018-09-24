const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

console.clear()
console.log('Building')

nunjucks.configure('views')

function mkFullDir(dir) {
  const fullPath = path.normalize(dir)
  const dirName = path.dirname(fullPath)
  fullPath.split(path.sep).reduce((acc, elem) => {
      const currDir = path.join(acc, elem + path.sep)
      if (!fs.existsSync(currDir))
          fs.mkdirSync(currDir)
      return currDir
  }, '')
}

function writeToPath(targetPath, data) {
  const dirName = path.dirname(targetPath)
  const fileName = path.basename(targetPath)
  mkFullDir(dirName)
  fs.writeFileSync(targetPath, data)
}



var regateFile = nunjucks.render('components/file/index.nunjucks')
regateFile = regateFile.replace(/\/dashmix\//g, '../../dashmix/')
writeToPath('./docs/components/file/index.html', regateFile)
// console.log(regateFile)


var uploader = nunjucks.render('uploader.nunjucks')
uploader = uploader.replace(/\/dashmix\//g, '../../dashmix/')
writeToPath('./docs/uploader/index.html', uploader)
// console.log(uploader)


var homepage = nunjucks.render('homepage.nunjucks')
homepage = homepage.replace(/\/dashmix\//g, '../../dashmix/')
writeToPath('./docs/index.html', homepage)
// console.log(homepage)