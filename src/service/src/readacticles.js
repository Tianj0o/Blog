const fs = require('fs')
const marked = require('marked')
const path = require('path')

// console.log(__dirname)
const artPath = path.resolve(__dirname, './articles/1.md')

const data = fs.readFileSync(artPath, 'utf-8')
// console.log(data.split('\n\r')[0].match(/[\u4e00-\u9fa5]+/g))
const header = data.split('\n\r')[0]

const title = header.match(/[\u4e00-\u9fa5]+/g)[0]
const createTime = header.match(/\d+\/\d+\/\d+/g)[0]
const articleBody = data.replace(`createAt:${createTime}`, '')
const htmlData = {
  title,
  createTime,
  articleBody: marked(articleBody)
}
// console.log(articleBody)
exports.htmlData = htmlData