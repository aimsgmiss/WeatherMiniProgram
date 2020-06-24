Component({
  properties: {
    options: {
      type: Array,
      value: []
    },
    key: {
      type: String,
      value: 'id'
    },
    text: {
      type: String,
      value: 'name'
    }
  },
  data: {
    result: [],
    isShow: false,
    current: {}
  },
  methods: {
    optionTap(e) {
      let dataset = e.target.dataset
      this.setData({
        current: dataset,
        isShow: false
      });

      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...dataset })
    },
    
    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 此方法供父组件调用
    close() {
      this.setData({
        isShow: false
      })
    }
  },

  lifetimes: {
    attached() {
      var firstElement = {}
      for (let item of this.data.options) {
        firstElement = {id:item.id,name:item.name}
        break;
      }
      this.setData({
        current:firstElement,
        result: this.data.options,
      })
    }
  }
})