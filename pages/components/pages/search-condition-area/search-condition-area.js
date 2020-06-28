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
  },

  /**
   * Component initial data
   */
  data: {
    currentArea:[]
  },

  /**
   * Component methods
   */
  methods: {
    onSearchBtnClick(){
      this.setData({
        isLoading:true
      });
      var eventDetail = {area:this.data.currentArea} // detail对象，提供给事件监听函数
      var eventOption = {} // 触发事件的选项
      this.triggerEvent('searchEvent', eventDetail, eventOption)
    },
    
    areaDidChange(e){
      this.setData({
        currentArea:e.detail
      })
    },
  },
  
  lifetimes:{
    attached(){
      this.setData({
        options:getApp().globalData.area
      })
    }
  }
})
