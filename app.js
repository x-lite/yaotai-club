const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const { PORT } = require('./config')
const { connect, initSchema} = require('./database/init')
const port = process.env.PORT || PORT

;(async () => {
    await connect()
    initSchema()
    let Movie = mongoose.model('Movie')
    let ms = await Movie.find({})
    console.log(ms)
})()

app.use( async (ctx, next) => {
    ctx.body = 'hello api'
    next()
})
app.listen(port, () => {
    console.log(`server start on ${port}...`)
})