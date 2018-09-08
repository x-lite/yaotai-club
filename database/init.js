
const mongoose = require('mongoose')
const { dbURI } = require('../config')
const path = require('path')
const glob = require('glob')
mongoose.Promise = global.Promise
exports.initSchema = () => {
    glob.sync( path.resolve(__dirname, '../models', '*.js')).forEach(require)
}

exports.connect = () => {
    let maxConnecTimes = 0 // 重连次数
    return new Promise((resolve, reject) => {
        
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true)
        }
        mongoose.connect(dbURI)
        mongoose.connection.on('disconnection', () => {
            maxConnecTimes++
            if (maxConnecTimes > 5){
                throw new Error('oops..., connection error')
            } else {
                mongoose.connect(dbURI)
            }
        })
        mongoose.connection.on('error', err => {
            maxConnecTimes++
            console.log(`oops..., err => ${err}`)
            if (maxConnecTimes > 5) {
                throw new Error('oops..., connection error')
            } else {
                mongoose.connect(dbURI)
            }
        })
        mongoose.connection.once('open', () => {
            console.log('mongodb connected success')
            //    let Dog = mongoose.model('Dog', {name: String})
            //    let doga = new Dog({name: '酷狗'})
            //    doga.save().then(() => console.log('test success'))
            resolve()
        })

    })
}