// pages/atlas/atlas.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    classes:["所有","分类1","分类2","分类3","分类4","分类5","分类6","分类7","分类8"],
    class_chosen:[1],
    chosenNumber:0,

    list:[],
    heig:"",
    topbottom: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this 
    for(let i=1;i<that.data.classes.length;i++){//获取分类数组并输出为[1,0,...]数组
      that.data.class_chosen=that.data.class_chosen.concat([0])
    }
    console.log("class_chosen",that.data.class_chosen)

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

  search:function(){
    wx.navigateTo({
      url: '/pages/atlas/search/search',
    })
  },

  chooseClass:function(e){
    let that = this
    let index=e.currentTarget.dataset.index
    //console.log("class_chosen1",that.data.class_chosen)
    that.data.class_chosen.splice(that.data.chosenNumber,1,0)//原本值设为0
    that.data.chosenNumber=index
    that.data.class_chosen.splice(index,1,1)//新变化的值变为1

    that.setData({
      class_chosen:that.data.class_chosen
    })
    // console.log("class_chosen2",that.data.class_chosen,"that.data.chosenNumber",that.data.chosenNumber)
  },

  upload:function(){
    wx.navigateTo({
      url: '/pages/atlas/upload/upload',
    })
  },

  gotoDetail:function(e){
    console.log(e.currentTarget.dataset.item)

    wx.navigateTo({
      url: '/pages/atlas/photos-detail/photos-detail?id='+e.currentTarget.dataset.item.id+"&img_1="+e.currentTarget.dataset.item.img_1+"&img_2="+e.currentTarget.dataset.item.img_2+"&img_3="+e.currentTarget.dataset.item.img_3+"&title="+e.currentTarget.dataset.item.title+"&country="+e.currentTarget.dataset.item.country+"&province="+e.currentTarget.dataset.item.province+"&city="+e.currentTarget.dataset.item.city,
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