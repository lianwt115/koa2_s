const router = require('koa-router')()
const UserService = require('../service/user_service')
router.prefix('/users')

router.get('/', function (ctx, next) {

  ctx.body = '用户表相关api'

})

router.get('/find', async function (ctx, next) {

     ctx.body = await UserService.find(ctx.query)

})

router.post('/login', async function (ctx, next) {

    //校验参数
     ctx.body = await UserService.find(ctx.request.body)

})
router.get('/save', async function (ctx, next) {

    ctx.body = await UserService.save(ctx.query)

})
router.get('/delete', async function (ctx, next) {

     ctx.body = await UserService.delete(ctx.query)

})
router.get('/updata', async function (ctx, next) {

     ctx.body = await UserService.updata(ctx.query)

})
router.get('/count', async function (ctx, next) {

     ctx.body = await UserService.count(ctx.query)

})

module.exports = router
