//index.js
//获取应用实例
const app = getApp()
const date = new Date()
const defaultYear  = date.getFullYear()
const defaultMonth = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)
const endDate = defaultYear + "-" + defaultMonth
const startDate = (defaultYear - 1) + "-" + defaultMonth

Page({
  data: {
    year: defaultYear,
    month: defaultMonth,
    data: '2020-05-01',
    endDate: endDate,
    startDate: startDate,
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
    iosDialog1: false,
    currentID: ''
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
  // 事件处理函数--时间选择
  bindDateChange: function(e) {
    const str = e.detail.value.split('-')
    this.setData({
      month: str[1],
      year: str[0]
    })
    // 然后再请求相应的数据
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
  },
  onShareAppMessage: function () {
    return {
      title: "自定义标题",
      desc: "自定义分享描述",
      path: "/pages/logs?id=123"
    }
  }
})
