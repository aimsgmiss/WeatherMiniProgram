
var config = require('../../config').requestUrl
// pages/search-result.js
Page({

  /**
   * Page initial data
   */
  data: {
    searchType:0,
    // 防雷检测资质单位
    dataTableSource1:[
      {
        name:"眉山市仁寿县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市清神县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"成都市宣汉县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"希米亚斯",
        address:"西藏班公湖",
        linkname:'马周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司3",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"波波维奇公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
    ],
    //防雷监管对象
    dataTableSource2:[
      {
        name:"眉山市仁寿县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市东坡区",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市清神县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市东坡区2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"成都市宣汉县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"上海网络科技有限公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"希米亚斯",
        address:"西藏班公湖",
        linkname:'马周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"上海网络科技有限公司2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"上海网络科技有限公司3",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"波波维奇公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
    ],
    //防雷监管对象
    dataTableSource3:[
      {
        name:"眉山市仁寿县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市东坡区",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市清神县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"眉山市东坡区2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"成都市宣汉县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告连接'
      },
      {
        name:"上海网络科技有限公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"希米亚斯",
        address:"西藏班公湖",
        linkname:'马周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"上海网络科技有限公司2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"上海网络科技有限公司3",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
      {
        name:"波波维奇公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        report:'报告1'
      },
    ],
    //气球释放资质单位
    dataTableSource4:[
      {
        name:"眉山市仁寿县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市清神县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"成都市宣汉县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"希米亚斯",
        address:"西藏班公湖",
        linkname:'马周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司3",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"波波维奇公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
    ],
    //防雷检测结果查询
    dataTableSource5:[
      {
        name:"眉山市仁寿县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市清神县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'甲级'
      },
      {
        name:"眉山市东坡区2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"成都市宣汉县",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"希米亚斯",
        address:"西藏班公湖",
        linkname:'马周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司2",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"上海网络科技有限公司3",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
      {
        name:"波波维奇公司",
        address:"西藏班公湖",
        linkname:'周永康',
        telphone:'12300',
        date:'2020-6-20',
        rank:'乙级'
      },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data.searchType = options.searchType
    this.searchData()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  searchData:function(){
    var searchType = this.data.searchType
    const body = this.selectComponent('#search-result-body')
    var requestUrl = ''
    if(searchType == "防雷检测资质单位"){
      this.setData({
        dataTableSource:this.data.dataTableSource1
      })
      requestUrl = config.requestUrl
    }else if(searchType == "防雷监管对象"){
      this.setData({
        dataTableSource:this.data.dataTableSource2
      })
      requestUrl = config.requestUrl
    }else if(searchType == "气球释放活动记录"){
      this.setData({
        dataTableSource:this.data.dataTableSource3
      })
      requestUrl = config.requestUrl
    }else if(searchType == "气球释放资质单位"){
      this.setData({
        dataTableSource:this.data.dataTableSource4
      })
      requestUrl = config.requestUrl
    }else if(searchType == "防雷检测结果查询"){
      this.setData({
        dataTableSource:this.data.dataTableSource5
      })
      requestUrl = config.requestUrl
    }
   
     wx.showToast({
       title: '请求成功',
       icon: 'success',
       mask: true,
     })
     wx.request({
       url: requestUrl,
       data: {
         noncestr: Date.now()
       },
       success(result) {
         wx.showToast({
           title: '请求成功',
           icon: 'success',
           mask: true,
           duration,
         })
         console.log('request success', result)
       },
       fail({errMsg}) {
         console.log('request fail', errMsg)
       }
     })
     this.setData({
     })
   body.properties.totalPageCount = this.data.dataTableSource.length / body.properties.everyPageCount + 1
   this.setPageIndex(1)
 },

  setPageIndex:function(pageIdx){
    const body = this.selectComponent('#search-result-body')
    const everyPageCount = body.properties.everyPageCount
    const currentPageIdx = body.properties.currentPageIdx
    if(pageIdx > body.properties.totalPageCount || pageIdx < 1){
      return
    }
    var tempArray = []
    for(var index = (currentPageIdx - 1) * everyPageCount; index < currentPageIdx * everyPageCount;index++){
      tempArray.push(this.data.dataTableSource[index])
    }

    var searchType = this.data.searchType
    if(searchType == "防雷检测资质单位"){
      body.setData({
        dataTableSource1:tempArray
      })
    }else if(searchType == "防雷监管对象"){
      body.setData({
        dataTableSource2:tempArray
      })
      
    }else if(searchType == "气球释放活动记录"){
      body.setData({
        dataTableSource3:tempArray
      })
      
    }else if(searchType == "气球释放资质单位"){
      body.setData({
        dataTableSource4:tempArray
      })
     
    }else if(searchType == "防雷检测结果查询"){
      body.setData({
        dataTableSource5:tempArray
      })
     
    }
  },

  onPreviousPage:function(){
    const body = this.selectComponent('#search-result-body')
    if(body.properties.currentPageIdx == 1){
      return
    }
    body.properties.currentPageIdx -= 1
    this.setPageIndex(body.properties.currentPageIdx)
  },

  onNextPage:function(){
    const body = this.selectComponent('#search-result-body')
    if(body.properties.currentPageIdx >= body.properties.totalPageCount){
      return
    }
    body.properties.currentPageIdx += 1
    this.setPageIndex(body.properties.currentPageIdx)
  }

})