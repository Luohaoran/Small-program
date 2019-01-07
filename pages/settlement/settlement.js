// pages/settlement/settlement.js
var util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:null,

  },

pay:function(){
  var TIME = util.formatTime(new Date());

  this.setData({

    time: TIME,

  });
  app.dingdan.src = app.scar.src;
  app.dingdan.title = app.scar.title;
  app.dingdan.price = app.scar.price;
  app.store.time = TIME;
  wx.navigateTo({
    url: '../' + 'xiangqing' + '/' + 'xiangqing'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ //这是修改数据的方式
      price: app.store.price,
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