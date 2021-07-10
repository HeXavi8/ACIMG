// pages/my/components/email/email.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
   
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    flag: true,
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示弹框
    showPopup () {
      this.setData({
        flag: !this.data.flag
      })
      console.log("show")
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _error () {
      //触发取消回调
      this.triggerEvent("error")
    },
    _success () {
      //触发成功回调
      this.triggerEvent("success");
    }
  }
})