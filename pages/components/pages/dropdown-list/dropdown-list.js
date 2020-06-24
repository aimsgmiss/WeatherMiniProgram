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
    },
    checked:{
      type:Boolean,
      value:true
    }
  },
  data: {
    result: [],
    isShow: false,
    current: {}
  },
  methods: {
    optionTap(e) {
      let dataset = e.currentTarget.dataset
      const items = this.data.options
      for(let index = 0,len = items.length; index < len;index++){
        if(items[index].id == dataset.id){
          items[index].checked = true
        }else{
          items[index].checked = false
        }
      }
      this.setData({
        current: dataset,
        isShow: false,
        result:items
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
        firstElement = {id:item.id,name:item.name,checked:item.checked}
        break;
      }
      this.setData({
        current:firstElement,
        result: this.data.options,
      })
      this.triggerEvent("change", { id:firstElement.id,name:firstElement.name})
    }
  }
})