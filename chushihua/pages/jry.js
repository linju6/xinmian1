// jry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArc: '/chushihua/image/logo+环.png',
    imageBrc: '/chushihua/image/今日报告（速览）.gif' ,
    imageCrc: '/chushihua/image/加载动画.gif',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    timer: null,
    // 当页面加载时，设置一个定时器
    this.timer = setTimeout(() => {
      // 跳转到下一个页面
      wx.redirectTo({
        url: '/zhuye/pages/zhuye',
        });
      }, 3000); // 3000毫秒 = 3秒
    },
  
    onUnload: function() {
      // 当页面卸载时，清除定时器
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideHomeButton();
    },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})