function request(params) {
  // 封装网络请求的代码
  return new Promise(function (resolve, reject) {
    wx.request({
      url: params.url,
      data: params.data || {},
      header: params.header || {},
      method: params.method || 'GET',
      dataType: 'json',
      success: function(res) {
        resolve(res.data)
      },
      fail: function(err) {
        wx.showToast({
          title: err || '请求错误！',
        })
        reject(err)
      }
    })
  }) 
}
// nodejs common
module.exports = {
  requestApi: request
}