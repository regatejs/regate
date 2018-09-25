const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

const siteUrl = '/regate/'
const themeUrl = '/regate/dashmix/'

console.log('Building GitHub pages')

nunjucks.configure('views')

function mkFullDir(dir) {
  const fullPath = path.normalize(dir)
  fullPath.split(path.sep).reduce((acc, elem) => {
      const currDir = path.join(acc, elem + path.sep)
      if (!fs.existsSync(currDir))
          fs.mkdirSync(currDir)
      return currDir
  }, '')
}

function writeToPath(targetPath, data) {
  const dirName = path.dirname(targetPath)
  mkFullDir(dirName)
  fs.writeFileSync(targetPath, data)
}


const views = {
  'components/text/index.nunjucks': './docs/components/text/index.html',
  'components/file/index.nunjucks': './docs/components/file/index.html',

  'uploader.nunjucks': './docs/uploader/index.html',
  'homepage.nunjucks': './docs/index.html',
  'components/index.nunjucks': './docs/components/index.html',
}

for (let view in views) {
  console.log(`Building: ${view} => ${views[view]}`)
  const output = nunjucks.render(view, { siteUrl, themeUrl })
  writeToPath(views[view], output)
}