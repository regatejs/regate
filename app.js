import express from 'express'
import nunjucks from 'nunjucks'
import fs from 'fs'
import path from 'path'

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
const port = 3000

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use('/dashmix', express.static('docs/dashmix'))


app.set('view engine', 'nunjucks')

app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/uploader', (req, res) => {
  res.render('uploader')
})

app.get('/components/:component', (req, res) => {
  const { component } = req.params
  res.render(`components/${component}/index`)
})


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))