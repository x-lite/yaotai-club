const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    movies: [{
        type: ObjectId,
        ref: 'Movie'
    }],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }

})
// 信息的创建和更新时间中间件
CategorySchema.pre('save', next => {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.new()
    } else {
        this.meta.updateAt = Date.new()
    }
    next()
})

module.exports = Category = mongoose.model('Category', CategorySchema)