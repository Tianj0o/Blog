const Koa = require('koa');
const app = new Koa()

const useData = require('./src/readacticles')
app.use((ctx, next) => {
  ctx.body = useData.htmlData
})
app.listen(8888, () => {
  console.log('监听8888')
})
