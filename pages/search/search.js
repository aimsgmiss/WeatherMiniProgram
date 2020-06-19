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
          name:'朋友圈'
        },
        {
          id:2,
          name:'文章'
        },
        {
          id:3,
          name:'公众号'
        }
      ],
      [
        {
          id:4,
          name:'小程序'
        },
        {
          id:5,
          name:'音乐'
        },
        {
          id:6,
          name:'表情'
        }
      ]
    ],
    options: [
      {
        cityId: '001',
        cityName: '东坡区'
      }, 
      {
        cityId: '002',
        cityName: '东坡区'
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
    search(){
      this.dataTableSource = [
        {
          name:"眉山市仁寿县",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市东坡区",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市清神县",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"眉山市东坡区2",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"成都市宣汉县",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"宁波比孚",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司2",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"上海网络科技有限公司3",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
        {
          name:"波波维奇公司",
          address:"上海市徐汇区漕河泾经济开发区古美路1528号A6栋4号楼",
          linkname:'马',
          telphone:'12300',
          date:'2020-6-20'
        },
      ]
    this.everyPageCount = 3
    this.totalPageCount = this.dataTableSource.length / this.everyPageCount + 1
    this.currentPageIdx = 1
    this.setPageIndex(1)
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

