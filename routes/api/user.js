const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/admin/login', async(ctx, next) => {
    // let { username, password} = ctx.body
    let res = {
        code: 0,
        msg: '登入成功',
        data: []
    }
    ctx.body = JSON.stringify(res);
})

module.exports = router