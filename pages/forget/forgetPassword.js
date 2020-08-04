// pages/forget/forgetPassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    passWord: '',
    disable: true,
    stemp: '',
    stempDisable: true
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
   * 页面相关事件处理函数--点击确认,发送修改密码请求
   */
  handleConfirm: function (event) {
    const params = {
      tel: this.data.tel,
      passWord: this.data.passWord,
      stemp: this.data.stemp
    }
    console.log(params)
    wx.showToast({
        title: "修改密码成功",
        icon: 'success',
        duration: 2000
    });
    setTimeout(() => {
      wx.navigateBack({
        delta: 1
      })
    }, 1500)
   
  },
   /**
   * 页面相关事件处理函数--输入手机号触发
   */
  inputTel: function (event) {
    // 判断是否同时存在, 同时存在则将按钮置为可点击
    this.setData({
      tel: event.detail.value,
      stempDisable: !(event.detail.value.length === 11 && this.data.tel),
      disable: !(event.detail.value && this.data.passWord && this.data.stemp)
    })
  },
   /**
   * 页面相关事件处理函数--输入验证码
   */
  inputStemp: function (event) {
    // 判断是否同时存在, 同时存在则将按钮置为可点击
    this.setData({
      stemp: event.detail.value,
      disable: !(event.detail.value && this.data.passWord && this.data.tel)
    })
  },
   /**
   * 页面相关事件处理函数--输入密码触发
   */
  inputPassword: function (event) {
     // 判断是否同时存在, 同时存在则将按钮置为可点击
    this.setData({
      passWord: event.detail.value,
      disable: !(event.detail.value && this.data.tel && this.data.stemp)
    })
  },
   /**
   * 页面相关事件处理函数--获取验证码
   */
  getStemp: function (event) {
    const params = {
      tel: this.data.tel
    }
    console.log(params)
    // 发送请求, 获取验证码, 并显示在键盘上方
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