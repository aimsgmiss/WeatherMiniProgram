Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    longitude:113.3245211,
    latitude:23.10229,
    mapHeight:1500,
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },

  onReady(){
     // 使用 wx.createContext 获取绘图上下文 context
     var context = wx.createCanvasContext('firstCanvas')
     //context.setLineWidth(5)
     //context.rect(0, 0, 200, 200)
     context.setFillStyle('white')
     context.setLineWidth(2)
     //context.moveTo(160, 100)
     context.arc(100, 100, 30, 0, 2 * Math.PI, true)
    
     //context.moveTo(140, 100)
     //context.arc(100, 100, 40, 0, Math.PI, false)
     //context.moveTo(85, 80)
     //context.arc(80, 80, 5, 0, 2 * Math.PI, true)
     //context.moveTo(125, 80)
     //context.arc(120, 80, 5, 0, 2 * Math.PI, true)
   
     context.stroke()

    context.setFontSize(20)
     context.fillText('路线',50,50)
     context.setFontSize(20)
     context.draw()
  },

  onLoad(){
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const {latitude, longitude} = res;
        this.setData({
          latitude:latitude,
          longitude:longitude
        });
      }
    });
  },
  onRoutePlan(){
    wx.redirectTo({
      url: '/pages/plugin/route-plan/route-plan',
    })
    //   wx.navigateTo({
    //   url: '/pages/plugin/route-plan/route-plan',
    //   complete: (res) => {},
    //   fail: (res) => {},
    //   success: (result) => {},
    // })
  }
})