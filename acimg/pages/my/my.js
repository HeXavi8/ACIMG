// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorize:false,
    nickName:"",
    avatarUrl:"",
    location:[],
    isPone:false,

    is_chosen:["1"],

    left: 60,

    switchChange: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //获取用户信息
  bindGetUserInfo: function(e) {
    console.log("点击登录")
    let that = this;
    if (e.detail.userInfo) {//用户确定授权按钮
            wx.getUserInfo({
              success: function(res) {
                that.setData({
                  nickName: res.userInfo.nickName,//获取初始昵称
                  avatarUrl: res.userInfo.avatarUrl,//获取初始头像
                  authorize: true,
                  isPone : true
                })

                wx.getLocation({
                  success: res=> {
                    console.log(res);
                    that.setData({
                      location: res,
                    })
                    // console.log(app.globalData.location);
                  },
                })

              },           
        fail:function(res){
          wx.hideLoading({
            success: (res) => {
              wx.showToast({
                title: '获取您的用户信息失败',
                icon: 'none'
              })
            },
          })
         }
      })

    } else {//用户拒绝授权
    }
  },

  //设置
  setting:function(){
    let that = this
    wx.navigateTo({
      url: '/pages/my/setting/setting?avatarUrl='+that.data.avatarUrl,
    })
  },

  uncheck:function(){
    this.setData({
      is_chosen:["1","0"],
      left:60,
    })

  },
  check:function(){
    this.setData({
      is_chosen:["0","1"],
      left:200
    })
  },

    // // 下面两个函数为滑动选择相关函数
    // changeTab: function(e) {
    //   //console.log(e)
    //   var currentIndex = e.currentTarget.dataset.aa;
    //   var test = "pageActive[" + currentIndex + "]";
    //   this.setData({
    //     currentIndex: e.currentTarget.dataset.aa,
    //     pageActive: [0, 0, 0, 0],
    //     [test]: 1,
    //   })
    //   this.changeline(e)
  
    // },
  
    // changeline: function() {
    //   const query = wx.createSelectorQuery()
    //   var _this = this
    //   query.select('.tabTrue').boundingClientRect()
    //   query.exec(function(res) {
    //     _this.setData({
    //       left: res[0].left
    //     })
    //     //console.log(res[0].left)
    //   })
    // },
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