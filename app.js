const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const { PORT } = require('./config')
const { connect, initSchema} = require('./database/init')
const port = process.env.PORT || PORT

const router = require('./routes/api/user')

;(async () => {
    await connect()
    initSchema()
    let Movie = mongoose.model('Movie')
    let ms = await Movie.find({})
    console.log(ms)
})()
app.use( async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})

// 路由
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(port, () => {
    console.log(`server start on ${port}...`)
})