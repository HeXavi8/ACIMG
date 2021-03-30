// pages/my/setting/setting.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let avatarUrl = options.avatarUrl
    let that = this
    that.setData({
      avatarUrl:avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.username_popup = this.selectComponent("#username_popup");
    this.email_popup = this.selectComponent("#email_popup");
    this.password_popup = this.selectComponent("#password_popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  username_showPopup() {
    this.username_popup.showPopup();
    console.log("show");
  },

  //取消事件
  _username_error() {
    console.log("你点击了取消");
    this.username_popup.hidePopup();
  },
  //确认事件
  _username_success() {
    console.log("你点击了确定");
    this.username_popup.hidePopup();
  },


  email_showPopup() {
    this.email_popup.showPopup();
    console.log("show");
  },

  //取消事件
  _email_error() {
    console.log("你点击了取消");
    this.email_popup.hidePopup();
  },
  //确认事件
  _email_success() {
    console.log("你点击了确定");
    this.email_popup.hidePopup();
  },


  
  password_showPopup() {
    this.password_popup.showPopup();
    console.log("show");
  },

  //取消事件
  _password_error() {
    console.log("你点击了取消");
    this.password_popup.hidePopup();
  },
  //确认事件
  _password_success() {
    console.log("你点击了确定");
    this.password_popup.hidePopup();
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
