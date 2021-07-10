// pages/subject/subjects-detail/subjects-detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introduction:"一行简介占位字符占位字符",
    time:"2020-10-10",
    is_show: false,
    list:[],
  },

  showPopBox(){
    this.setData({
      is_show: true
    })
  },

  closePopBox(){
    this.setData({
      is_show: false
    })
  },

  _backClick(){
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this._concatTags()
    let that = this 
 
    wx.request({
      url: app.globalData.jsonUrlPrefix+'index.json',
      success: (res => {
        console.log(res.data.data.list)
        for(let i=0;i<res.data.data.list.length;i++){
          console.log("1",res.data.data.list[i].img_1)
          res.data.data.list[i].img_1=app.globalData.imgUrlPrefix+res.data.data.list[i].img_1
          res.data.data.list[i].img_2=app.globalData.imgUrlPrefix+res.data.data.list[i].img_2
          res.data.data.list[i].img_3=app.globalData.imgUrlPrefix+res.data.data.list[i].img_3
        }
        console.log(res.data.data.list)
        that.setData({
          list:res.data.data.list
        })
      })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  }
})