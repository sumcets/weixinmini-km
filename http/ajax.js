const BASEURL = 'https://weixin.test.com/';

const ajax = (url, params={}, method='GET') => {
    const token = wx.getStorageSync('token');
    const header =   'Bearer ' + token;
    return new Promise((resolve, reject)=>{
        wx.request({
            url:  BASEURL + url ,
            data: params,
            method:method.toLocaleUpperCase(),
            header:{
                'Authorization': header
            },
            success: (res)=>{
                resolve(res.data)
            },
            fail: (error)=>{
                reject(error.response)
            }
        })    
    })
}

module.exports = ajax;