const fs = require('fs')
const marked = require('marked')
const path = require('path')



const getArticle = (queryTitle) => {
  const artPath = path.resolve(__dirname, `./articles/${queryTitle}.md`)

  const data = fs.readFileSync(artPath, 'utf-8')
  // console.log(data.split('\n\r')[0].match(/[\u4e00-\u9fa5]+/g))
  const header = data.split('\n\r')[0]
  // console.log(header)
  const title = header.match(/[\u4e00-\u9fa5]+/g)[0]
  const createTime = header.match(/\d+\/\d+\/\d+/g)[0]
  let articleBody = data.replace(`createAt:${createTime}`, '')
  articleBody = articleBody.replace(title, '')
  const htmlData = {
    title,
    createTime,
    articleBody: marked(articleBody)
  }
  return htmlData
}
exports.getArticle = getArticle