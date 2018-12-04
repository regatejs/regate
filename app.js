import express from 'express'
import nunjucks from 'nunjucks'
import fs from 'fs'
import path from 'path'

const version = require('./version')

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

const app = express()
const port = 3003
const siteUrl = '/'
const themeUrl = '/'
const timestamp = Math.floor(Date.now() / 1000)

const model = {
  siteUrl,
  themeUrl,
  timestamp,
  version,
}


nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(siteUrl, express.static('docs/dashmix'))


app.set('view engine', 'nunjucks')

app.get('/', (req, res) => {
  res.render('homepage', model)
})

app.get('/documentation/:doc', (req, res) => {
  const { doc } = req.params
  res.render(`documentation/${doc}/index`, model)
})

app.get('/integration/:doc', (req, res) => {
  const { doc } = req.params
  res.render(`integration/${doc}/index`, model)
})

app.get('/uploader/file', (req, res) => {
  res.render('uploader/file', model)
})

app.get('/uploader/image', (req, res) => {
  res.render('uploader/image', model)
})

app.get('/components/:component', (req, res) => {
  const { component } = req.params
  res.render(`components/${component}/index`, model)
})


app.get('/remark/:component', (req, res) => {
  const { component } = req.params
  res.render(`remark/${component}/index`, model)
})

app.get('/interactive/:component', (req, res) => {
  const { component } = req.params
  res.render(`interactive/${component}/index`, model)
})


app.listen(port, () =>
  console.log(`Regate app listening on http://localhost:${port}/`))