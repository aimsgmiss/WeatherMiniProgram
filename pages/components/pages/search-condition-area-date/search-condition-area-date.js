// pages/components/pages/search-condition/search-condtion.js
Component({
  behaviors:['wx://component-export'],
  export() {
    return { isLoading: false}
  },
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    isLoading:false,
    options:getApp().globalData.area
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
  }
})
