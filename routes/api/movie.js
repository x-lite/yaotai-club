const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

router.get('/movies', async (ctx, next) => {
    const movies = await Movie.find({}).sort({
        'meta.createAt': -1
    })
    ctx.body = {
        movies
    }
})
router.get('/movies/:id', async (ctx, next) => {
    const id = ctx.params.id
    const movies = await Movie.findOne({_id: id})
    ctx.body = {
        movies
    }
})