const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {dbURI, PORT} = require('./config')

mongoose.connect(dbURI)
    .then(() => console.log('mongodb connected success'))
    .catch(err => console.log(`oops..., err => ${err}`))

app.use( async (ctx, next) => {
    ctx.body = 'hello api'
    next()
})

app.listen(PORT, () => {
    console.log(`server start on ${PORT}...`)
})