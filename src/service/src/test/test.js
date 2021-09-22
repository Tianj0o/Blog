const fs = require('fs')
const path = require('path')
const filesPath = path.resolve(__dirname, '../articles')
const fileLists = fs.readdirSync(filesPath, {})

fileLists.forEach(item => {
  const filePath = path.resolve(filesPath, `${item}`)
  // fs.readFileSync()
  console.log(filePath)
});

