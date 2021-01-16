/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { Toast,Notify } from 'vant';
import store from '../store'
import { EFAULT } from 'constants';
import router from '../router'


axios.defaults.baseURL = 'https://app.wgx.lol/app/';
// axios.defaults.baseURL = '/api';

// 请求超时时间
axios.defaults.timeout = 20000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['auth'] = store.state.token;
// get请求头
// axios.defaults.headers.get['token'] = store.state.token;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;
        const token = 'xxx';
        token && (config.headers.token = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            //可判断服务器返回状态
            if(response.data.code != 8008){
				Notify({ type: 'danger', message: response.data.message });
				return Promise.reject(response);
            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 9999:
                
                    break;
                // 其他错误，直接抛出错误提示
                default:
				Notify({ type: 'danger', message: '网络错误 请稍后再试' });
            }
            return Promise.reject(error.response);
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        })
        .then(res => {
            Toast.clear();
            resolve(res.data);
        })
        .catch(err => {
            Toast.clear();
            reject(err.data)
        })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
        .then(res => {
            Toast.clear();
            resolve(res.data);
        })
        .catch(err => {
            Toast.clear();
            reject(err.data)
        })
    });
}