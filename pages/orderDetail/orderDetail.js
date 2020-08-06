// pages/orderDetail/orderDetail.js
const date = new Date()
const defaultYear  = date.getFullYear()
const defaultMonth = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
const defaultDay = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
const currentTime = defaultYear + '-' + defaultMonth + '-' + defaultDay
const endDate = defaultYear + "-" + defaultMonth + defaultDay
const startDate = (defaultYear - 1) + "-" + defaultMonth + defaultDay
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DetailId: '',
    data: currentTime,
    endDate: endDate,
    startDate: startDate,
  },
  handleConfirm(e) {
    console.log(e)
  },
   // 事件处理函数--时间选择
  bindDateChange: function(e) {
    this.setData({
      data: e.detail.value
    })
    // 然后再请求相应的数据
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      DetailId: options.id
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