// pages/user/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    passWord: '',
    disable: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    wx.hideHomeButton()
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
   * 页面相关事件处理函数--点击登录按钮触发登录
   */
  handleLogin: function (event) {
    const params = {
      userTel: this.data.tel,
      userPass: this.data.passWord
    }
    console.log('dianjiledenglu', params)
    // 进行登录验证操作
    wx.switchTab({
      url: '../index/index',
    })
  },
   /**
   * 页面相关事件处理函数--输入手机号触发
   */
  inputTel: function (event) {
    // 判断是否同时存在, 同时存在则将按钮置为可点击
    this.setData({
      tel: event.detail.value,
      disable: !(event.detail.value && this.data.passWord)
    })
  },
   /**
   * 页面相关事件处理函数--输入密码触发
   */
  inputPassword: function (event) {
     // 判断是否同时存在, 同时存在则将按钮置为可点击
    this.setData({
      passWord: event.detail.value,
      disable: !(event.detail.value && this.data.tel)
    })
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