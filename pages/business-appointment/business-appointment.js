// pages/business-appointment.js
Page({

  /**
   * Page initial data
   */
  data: {
    inputValue:'',
    currentBusinessType:'防雷检测',
    options:[
      {
        id:1,
        name:'防雷检测',
        checked:true
      },
      {
        id:2,
        name:'气球释放'
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  businessTypeDidChange:function(e){
    this.setData({
      currentBusinessType:e.detail
    })
  },

  bindInputBlur:function(e){
      this.setData({
        inputValue:e.detail.value
      })
  },

  onSubmit:function(e){
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      mask: true,
    })
  }

})