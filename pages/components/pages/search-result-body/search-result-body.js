const config = require('../../../../config')

Component({
properties:{
  totalPageCount:{
    type:Number,
    value:-1
  },

  everyPageCount:{
    type:Number,
    value:4
  },

  currentPageIdx:{
    type:Number,
    value:1
  },
  //防雷检测资质单位
  lightDeteQualiUnitSource:Array,
  //防雷监管对象
  lightProtTargetSource:Array,
  //防雷安全检查查询
  lightSafeInspeQuerySource:Array,
  //防雷检查结果查询
  lightInspeResultQuerySource:Array,
  //气球释放活动记录
  ballReleaseActivRecoSource:Array,
  //气球释放资质单位
  ballReleaseQualiUnitSource:Array
},

  data: {
    theme: 'light',
    scrollViewHeight:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upper(){
      //todo
      //this.triggerEvent("PreviousPageEvent",{},{})
    },

    lower(){
      //todo
      //this.triggerEvent("NextPageEvent",{},{})
    }
  },
  lifetimes:{
    attached(){
      var systemInfo = wx.getSystemInfoSync()
      var windowHeight = systemInfo.windowHeight
      var statusBarHeight = systemInfo.statusBarHeight
      var searchResultHeaderHeight = 50
      this.setData({
        scrollViewHeight:windowHeight - statusBarHeight - searchResultHeaderHeight
      })
    }
  }
})

