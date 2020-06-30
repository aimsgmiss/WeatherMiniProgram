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