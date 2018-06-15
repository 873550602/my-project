/**
 * 接口文档地址
 * author：liuguangrui
 */

const serviceModule = {
    getHttp: {
        url: 'https://easy-mock.com/mock/5b0d0d3e79a406394bf704b0/example/query',
        method: 'get'
    },

    fileUpload: {
    	url: '/upload',
    	method: 'post'
    }
}
const ApiList = { ...serviceModule }

export default ApiList  