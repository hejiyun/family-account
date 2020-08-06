// pages/canvas/canvas.js
let Charts = require('../../utils/wxcharts');
const date = new Date()
const defaultYear  = date.getFullYear()
const defaultMonth = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
const endDate = defaultYear + "-" + defaultMonth
const startDate = (defaultYear - 1) + "-" + defaultMonth
Page({
  /**
   * 页面的初始数据
   */
  data: {
    year: defaultYear,
    month: defaultMonth,
    data: '2020-05-01',
    endDate: endDate,
    startDate: startDate,
    left: 10,
    canvasLeft: 0,
    listLeft: 0,
    current: 1,
    list: [159, 221, 166, 253, 99, 147, 61,184],
    hotlist: [
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
  createSimulationData: function () {
    let categories = [];
    let data = [];
    for (let i = 1; i < 31; i++) {
        categories.push(i);
    }
    return {
        categories: categories,
        data: data
    }
},
  // 事件处理函数--切换收入支出
  handlechange(e) {
    this.setData({
      left: this.data.left === 10 ? 60 : 10,
      listLeft: this.data.listLeft ? 0 : -100
    })
  },
  // 事件处理函数--切换折线扇形
  handlechangeselect(e) {
    this.setData({
      canvasLeft: this.data.canvasLeft ? 0 : -100
    })
  },
  touchHandlerLineCanvas: function (e) {
  },
 // 事件处理函数--时间选择
  bindDateChange: function(e) {
    const str = e.detail.value.split('-')
    this.setData({
      month: str[1],
      year: str[0]
    })
    // 然后再请求相应的数据
  },
  // 事件函数--初始化canvas
  initChart() {
    let simulationData = this.createSimulationData();
    const width = wx.getSystemInfoSync().windowWidth
    let lines = this.data.list
    new Charts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      series: [{
          name: '支出',
          data: lines,
          format: function (val, name) {
              return val.toFixed(2) + '元';
          }
      }],
      xAxis: {
          disableGrid: true
      },
      yAxis: {
          title: '',
          format: function (val) {
              return val.toFixed(2);
          },
          min: 0
      },
      width: width,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
          lineStyle: 'curve',
      }
    });
    new Charts({
      canvasId: 'lineCanvas1',
      type: 'pie',
      series: [{
          name: 'cat1',
          data: 50,
      }, {
          name: 'cat2',
          data: 30,
      }, {
          name: 'cat3',
          data: 1,
      }, {
          name: 'cat4',
          data: 1,
      }, {
          name: 'cat5',
          data: 46,
      }],
      width: width,
      height: 200,
      dataLabel: true
  });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initChart()
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