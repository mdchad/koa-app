const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const Router = require('koa-better-router')

const port = process.env.port || 3000 

let api = Router({ prefix: '/api' })

// add `router`'s routes to api router
api.extend(router)


app.use(router.middleware())
app.use(api.middleware())

// app.use(async ctx=> {
//     ctx.type = 'html'
//     ctx.body = '<body><h1>Hello World</h1><p>This is my first koa app</p></body>'
// })

app.use(async ctx => {
  let status = ctx.response.status
  if(status === 404) {
      ctx.type = 'html'
      ctx.body = '<h1>You hit the wrong page buddy 404</h1>'
  }
});

if (!module.parent) {
    app.listen(port, console.log(`Server is listening on localhost:${port}`))
}