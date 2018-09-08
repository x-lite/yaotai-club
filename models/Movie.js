const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId, Mixed } = Schema.Types

const MovieSchema = new Schema({
    movieId: {
        type: String,
        require: true,
        unique: true
    },
    categroy: {
        type: ObjectId,
        ref: 'Categroy'
    },
    rate: Number,
    title: String,
    summary: String,
    video: String,
    poster: String,
    cover: String,
    rawTitile: String,
    movieType: [String],
    pubDate: Mixed,
    year: Number,
    tags: Array,
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
MovieSchema.pre('save', next => {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.new()
    } else {
        this.meta.updateAt = Date.new()
    }
    next()
})

module.exports = Movie = mongoose.model('Movie', MovieSchema)