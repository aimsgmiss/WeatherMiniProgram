// pages/components/pages/search-condition-area-level/search-condition-area-level.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
      currentArea:[],
      currentLevel:[],
      isLoading:false,
      positions: [
        {
          id: '001',
          name: '全国',
          checked:true
        }, 
        {
          id: '002',
          name: '四川'
        }
       ],
       levels:[
         {
          id:'001',
          name:'甲级',
          checked:true
         },
         {
          id:'002',
          name:'乙级'
        }
       ]
  },

  /**
   * Component methods
   */
  methods: {
    onSearchBtnClick(){
      this.setData({
        isLoading:true
      });
      var eventDetail = {area:this.data.currentArea,level:this.data.currentLevel} // detail对象，提供给事件监听函数
      var eventOption = {} // 触发事件的选项
      this.triggerEvent('searchEvent', eventDetail, eventOption)
    },

    areaDidChange(e){
      this.setData({
        currentArea:e.detail
      })
    },

    levelDidChange(e){
      this.setData({
        currentLevel:e.detail
      })
    }
  }
})
