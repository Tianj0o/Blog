const fs = require('fs')
const marked = require('marked')
const path = require('path')



const getArticle = (queryTitle) => {
  const artPath = path.resolve(__dirname, `./articles/${queryTitle}.md`)
  let data
  try {
    data = fs.readFileSync(artPath, 'utf-8')
  } catch (e) {
    data = '出错了'
  }
  return marked(data)
}
exports.getArticle = getArticle