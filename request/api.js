// 开发的服务器
var baseUrl = 'http://gz.wolfcode.cn/cms'
// 测试的服务器
// var baseUrl = 'http://192.168.113.116:8637'
// 正式环境
// var baseUrl = 'http://www.mysite.com'

var homeApi = baseUrl + '/xm/home'
var listApi = baseUrl + '/topic/list'
var loginApi = baseUrl + '/auth/loginByWeb'
//获取验证码var smsApi = baseUrl +'/sendSMS'//登录var loginApi = baseUrl +'/phoneRegin'
module.exports = {
  homeApi: homeApi,
  listApi: listApi,
  loginApi: loginApi,	smsApi,	loginApi
}