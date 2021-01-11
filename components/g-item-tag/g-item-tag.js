// components/g-item-tag/g-item-tag.js
Component({
  properties:{
    tag_text: String,
    bg_color: String,
  },
  lifetimes:{
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this._getLength()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods:{
    _getLength(){
      this.setData({
        text_length: this.properties.tag_text.length
      })
    }
  },
  data: {
    wid: 50,
    text_length: '',
  },

  
})