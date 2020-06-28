// pages/components/pages/search-result-header/search-result-header.js
Component({
  /**
   * Component properties
   */
  options:{
    multipleSlots:true
  },
  
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    previousPage(){
      this.triggerEvent("PreviousPageEvent",{},{})
    },

    nextPage(){
      this.triggerEvent("NextPageEvent",{},{})
    }
  }
})
