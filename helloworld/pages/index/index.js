//index.js
//获取应用实例
const app = getApp()
var radios=[];
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radios: [
      { name: '转换器器（switch）',path: 'switch/switch',checked:true },
      { name: '可移动视图（movable-view）', path: 'movable-view/movable-view'},
      { name: '导航（navigator）', path: 'navigator/navigator' },
      { name: '滚动视图（scroll-view）', path: 'scroll-view/scroll-view' },
      { name: '从底部弹出的选择器（picker）',path: 'picker/picker'},
      { name: '嵌入页面的滚动选择器（picker-view）', path: 'picker-view/picker-view' },
      { name: '富文本（richtext）', path: 'richtext/rt' },
      { name: '进度条（progress）', path: 'progress/pro' },
      { name: '多行输入框（textarea)', path: 'textarea/textarea' },
      { name: '滑动选择器（slider)', path: 'slider/slider' },
      { name: '滑块视图容器（swiper)', path: 'swiper/swiper' },
      { name: '单选项目(radio)', path: 'radio/radio'}
    ],
    radioCheckedIndex: 0
  },
  radioChange: function(e) {
    this.setData({
      radioValue: e.detail.value
    })
  },
  // goPage: function(e) {
  //   debugger
  //   var pageName = this.data.radioValue;
  //   wx.switchTab({
  //     url: '/pages/'+pageName+'/'+pageName
  //   })
  // },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
