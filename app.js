import express from 'express'
import nunjucks from 'nunjucks'

const app = express()
const port = 3000

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('docs'))

app.set('view engine', 'nunjucks')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/uploader', (req, res) => {
  res.render('uploader')
})

app.get('/components/file', (req, res) => {
  res.render('components/file/index')
})

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))