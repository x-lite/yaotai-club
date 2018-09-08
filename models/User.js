const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const SALT_WORK_FACTOR = 10 // 加盐强度

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String
    },
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
UserSchema.pre('save', next => {
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.new()
    } else {
        this.meta.updateAt = Date.new()
    }
    next()
})

// 对密码进行加盐
UserSchema.pre('save', next => {
    if (!this.isModified('password')) return next()
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) return next(err)
            this.password = hash
            next()
        })
    })
    next()
})

// 密码比对
UserSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if(!err){
                    resolve(isMatch)
                } else {
                    reject(err)
                }
            })
        })
    }
}


module.exports = User = mongoose.model('User', UserSchema)