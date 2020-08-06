// pages/catelogsetting/catelogsetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'test',
        src: '/page/weui/cell/icon_del.svg', // icon的路径
    }],
  },
  addCatalog(e) {
    wx.navigateTo({
      url: '../addcatalog/addcatalog',
    })
  },
 // 事件处理函数--点击收入支出
 handleTabChange() {
  this.setData({
    current: this.data.current === 0 ? 1 : 0
  })
},
slideButtonTap(e) {
  console.log('slide button tap', e.detail)
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