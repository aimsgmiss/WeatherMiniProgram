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
    options:getApp().globalData.area,
    currentArea:[],
    startTime:'',
    endTime:''
  },

  /**
   * Component methods
   */
  methods: {
    onSearchBtnClick(){
      this.setData({
        isLoading:true
      });
      var eventDetail = {area:this.data.currentArea,startTime:this.data.startTime,endTime:this.data.endTime} // detail对象，提供给事件监听函数
      var eventOption = {} // 触发事件的选项
      this.triggerEvent('searchEvent', eventDetail, eventOption)
    },

    areaDidChange(e){
      this.setData({
        currentArea:e.detail
      })
    },

    startTimeDidChange(e){
      this.setData({
        startTime:e.detail
      })
    },

    endTimeDidChange(e){
      this.setData({
        endTime:e.detail
      })
    }

  }
})
