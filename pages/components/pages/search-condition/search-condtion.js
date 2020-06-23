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
    options: [
      {
        cityId: '001',
        cityName: '东坡区'
      }, 
      {
        cityId: '002',
        cityName: '彭山区'
      }, 
      {
        cityId: '003',
        cityName: '仁寿县'
      },
      {
        cityId: '004',
        cityName: '洪雅县'
      },
      {
        cityId: '005',
        cityName: '丹棱县'
      },
      {
        cityId: '006',
        cityName: '青神县'
      }
  ],
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
