// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarurl: '../../images/logo.png',
    isEdit: true,
    nickname: '1231'
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
  handlerAvatar: function () {
    wx.showActionSheet({
        itemList: ['从相册选取'],
        success: (res) => {
            // console.log(res);

            if (res.tapIndex === 0) {
                this.pickPhoto();
            }

        }
    })
},
takePhoto: function () {
    wx.navigateTo({
        url: './../camera/camera',
    })
    // wx.createCameraContext(this).takePhoto({　　　　
    //   quality: 'high',
    //   success: (res) => {
    //     console.log(res);　　　
    //   }　　
    // })
},
pickPhoto: function () {
    wx.chooseImage({
        count: 1,
        size: 'compressed',
        success: (res) => {
            let data = {
                data: {tel: 123453444233312231},
                fileOptions: {
                    filePath: res.tempFilePaths[0],
                    name: 'avatar'
                }
            };
            api.avatar(data).then((res1) => {
                console.log(res1);
                this.setData({
                    avatarurl: res.tempFilePaths[0]
                });
                getApp().globalData.isUpdateAvatar = true;
            }).catch((errMsg) => {
                console.log(errMsg);
            });

        },
    })
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