//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'welcome',
    userName: '',
    userPassword: '',
    id_token: '',
    responce: ''
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  logIn: function(e) {
    var that = this;
    wx.navigateTo({
      url: '../redirect/redirect'
    })
    wx.showToast({
      title: this.data.userName,
      success: this.data.userPassword
    })
  }
})
