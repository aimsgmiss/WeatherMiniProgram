//app.js
App({
  /// git hub
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    area:[
      {
        id: '001',
        name: '东坡区',
        checked: true
      }, 
      {
        id: '002',
        name: '彭山区'
      }, 
      {
        id: '003',
        name: '仁寿县'
      },
      {
        id: '004',
        name: '洪雅县'
      },
      {
        id: '005',
        name: '丹棱县'
      },
      {
        id: '006',
        name: '青神县'
      }
  ]
  }
})