// pages/components/pages/search-condition-area/search-condition-area.js
Component({
  /**
   * Component properties
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    key: {
      type: String,
      value: 'id'
    },
    text: {
      type: String,
      value: 'name'
    }
  },

  /**
   * Component initial data
   */
  data: {
   
  },

  /**
   * Component methods
   */
  methods: {
    onSearchBtnClick(){
      this.setData({
        isLoading:true
      });
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('searchEvent', myEventDetail, myEventOption)
    }
  },

  lifetimes:{
    attached(){
      this.setData({
        options:getApp().globalData.area
      })
    }
  }
})
