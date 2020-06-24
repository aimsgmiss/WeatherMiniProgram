// pages/components/pages/date-picker/date-picker.js
var util = require('../../../../utils/util.js')
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
      startDate:util.formatTime(new Date()),
      endDate:util.formatTime(new Date())
  },

  /**
   * Component methods
   */
  methods: {
    bindStartDateChange(e){
      this.setData({
        startDate: e.detail.value
      })
      
    },

    bindEndDateChange(e){
      this.setData({
        endDate: e.detail.value
      })
    }
  }
})
