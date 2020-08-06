// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nickname: '',
      avatar: '../../images/logo.png',
      mines: [{
          class: '',
          icon: '',
          text: '类别设置',
          url: './../catelogsetting/catelogsetting'
      },
          {
              class: '',
              icon: '',
              text: '密码设置',
              url: './../forget/forget'
          },
          {
              class: '',
              icon: '',
              text: '常见问题',
              url: ''
          },
          {
              class: '',
              icon: '',
              text: '意见反馈',
              url: ''
          },
          {
              class: 'bottom10',
              icon: '',
              text: '关于家庭记账系统',
              url: './../about/about'
          },
          // {
          //   class: 'bottom10',
          //   icon: './../../images/mine/setting_logout.svg',
          //   text: '退出账号',
          //   url: './../login/login'
          // }
      ]
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

  handleLogout: function () {
      wx.showModal({
          title: '提示',
          content: '您确定要退出当前账号？',
          success: (res) => {
              if (res.confirm) {
                  wx.redirectTo({
                      url: './../login/login',
                  })
              }
          }
      })
  }
})