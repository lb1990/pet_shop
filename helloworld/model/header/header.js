// model/header/header.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo:null,
    canIUse: false,
    flowDes:[
      { id:'1', name:'代付款',imgUrl:'../../img/1.png'},
      { id: '2',name: '已付款', imgUrl: '../../img/2.png' },
      { id: '3',name: '待收货', imgUrl: '../../img/3.png' },
      { id: '4',name: '已完成', imgUrl: '../../img/4.png' },
      { id: '5',name: '退款/售后', imgUrl: '../../img/5.png' }
    ]
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  flowChange: res => {
    switch (Number(res.currentTarget.id)) {
      case 1: 
        console.log(res.currentTarget.id);
        var reqres = wx.request({
          url: "http://blog/helloblog/",
          success: function(e) {
            debugger
            console.log(e);
          }
        })
        break;
      case 2:
        console.log(res.currentTarget.id);
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo) {
    };
    wx.getUserInfo({
      success: res => {
        if(wx.canIUse('button.open-type.getUserInfo')) {
          this.setData({
            userInfo: res.userInfo
          });
        }else{

        }
      }
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