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

  dataTableSource1:Array,
  dataTableSource2:Array,
  dataTableSource3:Array,
  dataTableSource4:Array,
  dataTableSource5:Array
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

