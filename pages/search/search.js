// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iosDialog1: false,
    currentDetail: {
      receive: '2020',
      pay: '220',
      balance: '1800'
    },
    contentList: [
      {
        Date: '2019-08-12',
        weekDate: '周日',
        pay: '200',
        receive: '2020',
        list: [
          {
            id: 'so8996s',
            type: '旅游',
            remark: 'BDBDB',
            pay: '200',
            receive: ''
          },
          {
            id: 'so18329o',
            type: '工资',
            remark: '梦幻西游',
            pay: '',
            receive: '2020'
          }
        ]
      },
      {
        Date: '2019-08-05',
        weekDate: '周日',
        pay: '20',
        receive: '0',
        list: [
          {
            id: 'so3859',
            type: '旅游',
            remark: 'BDBDB',
            pay: '10',
            receive: ''
          },
          {
            id:'so2u28',
            type: '餐饮',
            remark: '早餐',
            pay: '10',
            receive: ''
          }
        ]
      }
    ],
  },
  //事件处理函数---点击收支列表查看详情
  listTab: function(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../orderDetail/orderDetail?id='+ e.currentTarget.dataset.id,
    })
  },
 // 事件处理函数---长按收支列表触发删除
 longTab(e) {
  console.log(e.currentTarget.dataset.id)
  this.setData({
    iosDialog1: true
  })
 },
  // 事件处理函数---点击警告弹窗关闭方法
  close(e) {
    this.setData({
      iosDialog1: false,
      currentID: e.currentTarget.dataset.id
    })
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