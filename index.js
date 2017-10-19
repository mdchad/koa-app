const Koa = require('koa')
const app = new Koa()

const port = process.env.port || 3000 

app.use(async ctx=> {
    ctx.body = 'Hello World'
})

if (!module.parent) {
    app.listen(port, console.log(`Server is listening on localhost:${port}`))
}