const ajax = require('./ajax');

/**
 * 登录接口
 * @param {*} data 
 */
export const Login =  data => ajax('login', data, 'post');