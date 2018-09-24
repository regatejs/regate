const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

const siteUrl = '/regate/'

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




var regate_text = nunjucks.render('components/text/index.nunjucks', { siteUrl: siteUrl })
writeToPath('./docs/components/text/index.html', regate_text)
// console.log(regate_text)


/*
var uploader = nunjucks.render('uploader.nunjucks', { siteUrl: siteUrl })
uploader = uploader.replace(/\/dashmix\//g, '../../dashmix/')
writeToPath('./docs/uploader/index.html', uploader)
// console.log(uploader)
*/

var homepage = nunjucks.render('homepage.nunjucks', { siteUrl: siteUrl })
writeToPath('./docs/index.html', homepage)
// console.log(homepage)