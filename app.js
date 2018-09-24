import express from 'express'

const app = express()
const port = 3000

app.use(express.static('static'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))