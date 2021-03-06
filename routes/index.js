const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'LWT',
  })
})
router.get('/play', async (ctx, next) => {
  await ctx.render('play', {
    title: ctx.query.name,
    name:"upload/"+ctx.query.name
  })
})

router.get('/upload', async (ctx, next) => {
    await ctx.render('upload', {

    })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
