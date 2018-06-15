/**
 * axiosApi封装，接口属于mock，可以修改
 * author：liuguangrui
 */
import axios from 'axios'
import qs from 'qs'

//请求拦截器配置
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 返回拦截器配置
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

// 错误返回
function errorState(response) {
    //加入loading  
    console.log(response)
    // 如果http状态码正常，则直接返回数据  
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data  
    } else {
        console.log('网络异常');
    }

}
// 成功后返回
function successState(res) {
    //加入loading 
    //统一判断后端返回的错误码  
    if (res.data.errCode == '000002') {
        console.log('网络异常');
    } else if (res.data.errCode != '000002' && res.data.errCode != '000000') {
        console.log('网络异常');
    }
}

// http请求
const httpServer = (opts, data) => {
    let Public = { //公共参数  
        'time': "时间戳"
    }
    console.log(opts);
    console.log(data);
    let httpDefaultOpts = { //http默认配置  
        method: opts.method,
        baseURL:'',
        url: opts.url,
        timeout: 10000,
        params: Object.assign(Public, data),
        data: qs.stringify(Object.assign(Public, data)),
        headers: opts.method == 'get' ? { //配置请求头数据
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8"
        } : {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
    }
    // 
    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }

    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (res) => {
                successState(res)
                resolve(res)
            }
        ).catch(
            (response) => {
                errorState(response)
                reject(response)
            }
        )

    })
    return promise
}

export default httpServer  