

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
      var id = parseInt(event.currentTarget.id)
      var json = getApp().globalData.categoryList
      json.forEach(element => {
        element.forEach(subElement => {
            var placeholder = ''
            if(subElement['id'] == id){
              placeholder = subElement['name']
              if(subElement['id'] == 4){
                placeholder += ':电话号码'
              }
              this.setData({
                currentSelectedCategory:id,
                placeholder:placeholder
              })
            }
        })
      })
    },

    validateDate(startTime,endTime){
      if(startTime > endTime){
        wx.showToast({
          title: '开始日期大于结束日期',
          icon:'none',
          duration:1500
        })
        return false
      }
      return true
    },

    searchData(e){
      var currentSelectedCategory = this.data.currentSelectedCategory
      var url = '/pages/search-result/search-result?searchType=' + currentSelectedCategory
      var parameters = ''
      if(currentSelectedCategory == '1'){
        parameters += '&area=' + e.detail.area.name + '&level=' + e.detail.level.name
      }else if(currentSelectedCategory == '2'){
        if(!this.validateDate(e.detail.startTime,e.detail.endTime)){
          return
        }
        parameters += '&area=' + e.detail.area.name + '&startTime=' + e.detail.startTime + '&endTime=' + e.detail.endTime
      }else if(currentSelectedCategory == '3'){
        if(!this.validateDate(e.detail.startTime,e.detail.endTime)){
          return
        }
        parameters += '&area=' + e.detail.area.name + '&startTime=' + e.detail.startTime + '&endTime=' + e.detail.endTime
      }else if(currentSelectedCategory == '4'){
        parameters += '&telphone=' + e.detail.value
      }else if(currentSelectedCategory == '5'){
        if(!this.validateDate(e.detail.startTime,e.detail.endTime)){
          return
        }
        parameters += '&area=' + e.detail.area.name + '&startTime=' + e.detail.startTime + '&endTime=' + e.detail.endTime
      }else if(currentSelectedCategory == '6'){
        parameters += '&area=' + e.detail.value
      }
      getApp().globalData.searchParameters = parameters
      wx.navigateTo({
        url: url,
      })
   }
  }
})

