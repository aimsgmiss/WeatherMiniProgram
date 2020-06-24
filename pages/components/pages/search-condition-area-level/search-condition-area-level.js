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
      isLoading:false,
      positions: [
        {
          id: '001',
          name: '全国'
        }, 
        {
          id: '002',
          name: '四川'
        }
       ],
       levels:[
         {
          id:'001',
          name:'甲级'
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
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('searchEvent', myEventDetail, myEventOption)
    }
  }
})
