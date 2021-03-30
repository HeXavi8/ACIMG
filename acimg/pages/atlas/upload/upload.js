// pages/upload/upload.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemInfos:[
      {title:"分类", value: "分类1"}, 
      {title:"版权信息", value: "开源开放"},
      {title:"语言", value: "中文(默认)"}, 
      {title:"地理信息", value: ""}
    ]
    ,
    heig:"",
    is_show: false
  },

  itemClick:function(e){
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    switch (index) {
      case 0:
        {
          wx.navigateTo({
            url: '/pages/atlas/upload/classify/classify',
          })
        }
        break;
      case 3:
        {
          wx.navigateTo({
            url: '/pages/atlas/upload/location/location',
          })
        }
      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //计算胶囊高度
    var pos = wx.getMenuButtonBoundingClientRect();
    this.setData({
      heig: (pos.top + pos.bottom) / 2 - 10
    })
    
  },

  _cancel:function(){
    // wx.navigateBack({
    //   delta: 0,
    // })
    this.setData({
      is_show : true
    })
  },

  _addClick:function(){
    wx.chooseImage({
      
    })
  },

  _backClick:function(){
    this.setData({
      is_show: false
    })
  },

  _abandonClick:function(){
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.itemInfos)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(this.data.itemInfos)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


})
