var api = require('./api.js')
var request = require('./request.js')

function getHome(params) {
  return request.requestApi({
    url: api.homeApi
  })
}

function getList(params) {
  return request.requestApi({
    url: api.listApi,
    data: params,
  })
}

function LoginFn(params) {
  return request.requestApi({
    url: api.loginApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}function getSMS(params) {
  return request.requestApi({
    url: api.smsApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}
function loginFn(params) {
  return request.requestApi({
    url: api.loginApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}
module.exports = {
  getHome: getHome,
  LoginFn: LoginFn,
  getList: getList,	getSMS,	loginFn
}