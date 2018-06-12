const router = require('koa-router')()
const UserDao = require('../db/dao/UserDao')
router.prefix('/users')

router.get('/', function (ctx, next) {

  ctx.body = 'this is a users response!'

})

router.get('/find', async function (ctx, next) {

     ctx.body = await UserDao.find(ctx.query)

})

module.exports = router
