const Koa = require('koa');
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser');
const { getArticle } = require('./src/readacticles')
const { articleInfoLists } = require('./src/articles/index')
app.use(bodyParser())
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  ctx.set("Content-Type", "application/json;charset=utf-8");
  await next();

});
router.get('/posts', (ctx) => {
  ctx.body = {
    articleInfoLists
  }
})
router.post('/posts/1', (ctx) => {
  console.log(ctx.request.body)
  const { title } = ctx.request.body
  const data = getArticle(title)
  // console.log(data)
  ctx.body = {
    articleBody: data
  }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(8888, () => {
  console.log('监听8888')
})
