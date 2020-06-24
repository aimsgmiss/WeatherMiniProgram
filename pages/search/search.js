const config = require('../../config')

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
    totalPageCount:-1,
    everyPageCount:3,
    currentPageIdx:1,
    dataTableShow:[],
    dataTableSource:[],
    theme: 'light',
    currentSelectedCategory:'',
    placeholder:'搜索',
    categoryList:[
      [
        {
          id:1,
          name:'防雷检测资质单位'
        },
        {
          id:2,
          name:'防雷监管对象'
        }
      ],
      [
        {
          id:3,
          name:'防雷安全检查查询'
        },
        {
          id:4,
          name:'防雷检测结果查询'
        }
     ],
      [
        {
          id:5,
          name:'气球施放活动记录'
        },
        {
          id:6,
          name:'气球施放资质单位'
        }
      ],
    ],
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

    nextPage(){
      console.log('next page click')
    },

    searchData(event){
     var requestUrl = ''
     switch(parseInt(event.currentTarget.dataset.urltype)){
      case 1:
        requestUrl = config.requestUrl
        break;
      case 2:
        requestUrl = config.requestUrl
        break;
      case 3:
        requestUrl = config.requestUrl
        break;
      case 4:
        requestUrl = config.requestUrl
        break;
      case 5:
        requestUrl = config.requestUrl
        break;
      default:
        break;
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
      this.dataTableSource = [
        {
          name:"眉山市仁寿县",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市东坡区",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市清神县",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市东坡区2",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"成都市宣汉县",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"希米亚斯",
          address:"西藏班公湖",
          linkname:'马周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司2",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司3",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"波波维奇公司",
          address:"西藏班公湖",
          linkname:'周永康',
          telphone:'12300',
          date:'2020-6-20'
        },
      ]
    this.everyPageCount = 3
    this.totalPageCount = this.dataTableSource.length / this.everyPageCount + 1
    this.currentPageIdx = 1
    this.setPageIndex(1)

    var child = this.selectComponent('#searchFriendBtn')
    console.log('child' + child)
    var br = 0
  },

  setPageIndex(pageIdx){
    if(pageIdx > this.totalPageCount || pageIdx < 1){
      return
    }
    var tempArray = []
    for(var index = (this.currentPageIdx - 1) * this.everyPageCount; index < this.currentPageIdx * this.everyPageCount;index++){
      tempArray.push(this.dataTableSource[index])
    }
    this.setData({
      dataTableShow:tempArray
    })
  },

  previousPage(event){
    if (this.currentPageIdx == 1){
      return
    }
    this.currentPageIdx -= 1
    this.setPageIndex(this.currentPageIdx)
  },

  nextPage(event){
    if(this.currentPageIdx >= this.totalPageCount){
      return
    }
    this.currentPageIdx += 1
    this.setPageIndex(this.currentPageIdx)
  }

  }
})

