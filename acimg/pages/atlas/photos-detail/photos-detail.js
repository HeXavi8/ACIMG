const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo_tags:["非专题图册", "开源开放", "中文", "分类"],
    get_time: "2020-07-05",
    collect_time: "2020-07-08",
    photo_tags_str: "",
    is_show: false,
    title:"",//图册名称
    img_1:"",//顶上首张图片
    img_2:"",//顶上首张图片
    img_3:"",//顶上首张图片
    country:"",//国家
    province:"",//省市
    city:"",//城市
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

  _concatTags(){//方便文字用“|”分隔开
    let temp_str = ''
    for(let item of this.data.photo_tags){
      temp_str += item + " | "
    }
    temp_str = temp_str.substr(0, temp_str.length - 2);
    this.setData({
      photo_tags_str : temp_str
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
    console.log(options)
    this.setData({
      img_1:options.img_1,
      img_2:options.img_2,
      img_3:options.img_3,
      title:options.title,
      country:options.country,
      province:options.province,
      city:options.city,
    })
    this._concatTags()
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