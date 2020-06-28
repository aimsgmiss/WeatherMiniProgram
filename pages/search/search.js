

Component({
  properties: {
    searchstr: {     //input  值
      type: String,
      value: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    theme: 'light',
    currentSelectedCategory:'',
    placeholder:'搜索',
    categoryList:getApp().globalData.categoryList
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    // 取消
    clearData(){
      this.setData({
        searchstr:"",
        dataTableShow:[],
        currentSelectedCategory:'',
        placeholder:'搜索'
      })
    },

    cancelsearch() {
      this.clearData()
    },

    //清空搜索框
    clearSearchBar(e) {
      this.clearData()
    },

    categoryClick(event){
      var id = event.currentTarget.id
      this.setData({
        currentSelectedCategory:id,
        placeholder:id
      })
    },

    searchData(){
      wx.navigateTo({
        url: '/pages/search-result/search-result?searchType='+this.data.currentSelectedCategory,
      })
   }
  }
})

