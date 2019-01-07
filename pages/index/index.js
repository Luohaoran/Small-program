// pages/index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    a: '1',
    src: app.data.src,
    commodity: [{
        src: '../../images/one.jpeg',
        title: '牛油果草莓安慕希',
        price: '26.00'
      },
      {
        src: '../../images/two.jpeg',
        title: '花样茉莉水果茶',
        price: '22.00'
      },
      {
        src: '../../images/three.jpeg',
        title: '满怀莓莓茶',
        price: '11.00'
      },
      {
        src: '../../images/fore.jpeg',
        title: '玫瑰清风凝露',
        price: '30.00'
      },
    ],
    CheckSrc: [{
        title: '我要付款',
        src: "../../images/Check.png",
      },
      {
        title: '我要充值',
        src: "../../images/Recharge.png",

      },
      {
        title: '优惠卷',
        src: "../../images/Coupon.png",
      },
      {
        title: '会员卡',
        src: "../../images/Member.png",
      }
    ],
    imgUrls: [
      "../../images/1.png",
      "../../images/2.png",
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    afterColor: "white" //当前选中的指示点颜色
  },
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18009012652',
    })

  },
  goumai: function(e) {
    app.store.src = e.currentTarget.dataset.src;
    app.store.title = e.currentTarget.dataset.title;
    app.store.price = e.currentTarget.dataset.price;
    wx.navigateTo({
      url: '../' + 'purchase' + '/' + 'purchase'
    })


  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})