const adminApiKey = 'adminApiKey'
const algoliasearch = require('algoliasearch')

console.clear()
console.log(algoliasearch)

const client = algoliasearch('NN4R8IO96A', adminApiKey)

const siteUrl = '/regate/'

var index = client.initIndex('regate')

var objects = [{
  objectID: 'RegateText',
  name: 'RegateText',
  url: `${siteUrl}components/text`,
}, {
  objectID: 'RegateTextarea',
  name: 'RegateTextarea',
  url: `${siteUrl}components/textarea`,
}]

index.addObjects(objects, function(err, content) {
  console.log(content)
})
