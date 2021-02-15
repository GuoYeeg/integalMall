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
}//获取验证码function getSMS(params) {
  return request.requestApi({
    url: api.smsApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}//登录
function loginFn(params) {
  return request.requestApi({
    url: api.loginApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}//获取用户信息function getuserInfo(params) {
  return request.requestApi({
    url: api.userInfoApi,
    data: params,
  })
}//获取精品推荐数据function getgoodsRecommand() {
  return request.requestApi({
    url: api.goodsRecommendApi,
  })
}//获取热门兑换function getgoodsHot() {
  return request.requestApi({
    url: api.goodsHotApi,
  })
}
module.exports = {
  getHome: getHome,
  LoginFn: LoginFn,
  getList: getList,	getSMS,	loginFn,	getuserInfo,	getgoodsRecommand,	getgoodsHot,
}