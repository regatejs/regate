const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')

const siteUrl = '/regate/'
const themeUrl = '/regate/dashmix/'
const timestamp = Math.floor(Date.now() / 1000)

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
  'components/textarea/index.nunjucks': './docs/components/textarea/index.html',
  'components/text/index.nunjucks': './docs/components/text/index.html',
  'components/file/index.nunjucks': './docs/components/file/index.html',
  'components/image/index.nunjucks': './docs/components/image/index.html',
  'components/contenteditable/index.nunjucks': './docs/components/contenteditable/index.html',
  'components/ckeditor/index.nunjucks': './docs/components/ckeditor/index.html',
  'components/dropdown/index.nunjucks': './docs/components/dropdown/index.html',
  'components/number/index.nunjucks': './docs/components/number/index.html',
  'components/keyword/index.nunjucks': './docs/components/keyword/index.html',
  'components/persiandatetimepicker/index.nunjucks': './docs/components/persiandatetimepicker/index.html',
  'components/switch/index.nunjucks': './docs/components/switch/index.html',
  'components/foreignkey/index.nunjucks': './docs/components/foreignkey/index.html',

  'documentation/start/index.nunjucks': './docs/documentation/start/index.html',
  'documentation/download/index.nunjucks': './docs/documentation/download/index.html',
  'documentation/styling/index.nunjucks': './docs/documentation/styling/index.html',

  'uploader/file.nunjucks': './docs/uploader/file/index.html',
  'uploader/image.nunjucks': './docs/uploader/image/index.html',
  'homepage.nunjucks': './docs/index.html',
}

for (let view in views) {
  const viewName = view
    .replace('components/', '')
    .replace('/index', '')
    .replace('.nunjucks', '')

  console.log(`Building: ${viewName}`)
  console.log(`  $ ${view}`)
  console.log(`  λ ${views[view]}`)
  console.log('')
  
  const output = nunjucks.render(view, { siteUrl, themeUrl, timestamp })
  writeToPath(views[view], output)
}