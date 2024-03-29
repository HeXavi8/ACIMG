// components/g-title-content.js
// 此组件为顶部导航栏内容组件
Component({
  /**
   * 组件的属性列表
   */
  // 启用插槽
  options: {
    multipleSlots: true
  },

  properties: {

  },
  // 生命周期
  lifetimes:{
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this._getHeight()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    heig:"",
    topbottom:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getHeight(){
      var pos = wx.getMenuButtonBoundingClientRect();
      this.setData({
        heig: (pos.top + pos.bottom) / 2 - 10,
        topbottom: pos.bottom + 7
      })
    }
  }
})
