/**
 *  对axios进行封装
 */
import axios from 'axios';
import Cookies from 'js-cookie';
import { Modal, message } from 'antd';

const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000
})

// request拦截器
http.interceptors.request.use(req => {
    let token = Cookies.get('token')
    if (token) req.data['token'] = token
    req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return req
}, error => {
    return Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use(
    response => {
        let result = response.data
        if (+result.code < 0) {
            message.error(result.msg)
            return Promise.reject(result.data)
        } else {
            message.success(result.msg)
            return Promise.resolve(result.data)
        }
    },
    error => {
        message.error(error.message)
        return Promise.reject(error)
    }
);

export default http;