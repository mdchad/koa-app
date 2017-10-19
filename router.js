let Router = require('koa-better-router')
let router = Router().loadMethods()

router.get('/', (ctx, next) => {
  ctx.body = `<body><h1>Hello World</h1><p>This is my first koa app</p><p>listening on ${ctx.route.prefix}</p></body>`
  return next()
})

router.get('/foo', (ctx,next) => {
  ctx.body = `This is ${ctx.route.prefix} ${ctx.route.path}`
  return next()  
})

module.exports = router
