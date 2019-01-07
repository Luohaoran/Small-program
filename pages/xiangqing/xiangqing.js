// pages/xiangqing/xiangqing.js

var util = require('../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: "black",
    data: [{
        id: '1',
        title: '全部',
        
      },
      {
        id: '2',
        title: '待付款',
       
      },
      {
        id: '3',
        title: '代发货',
       
      },
      {
        id: '4',
        title: '待收货',
     
      }
    ],
    src:null,
    title:null,
    time:null,
    price:null,
    idx: 0
  },
  goIndex(e) {
   
  
    let index = e.currentTarget.dataset.index;
    // console.log('每个index',index)
    this.setData({
      idx: index
    })
  },
  check: function() {
    console.log('dddd');
    this.setData({
      color: "red",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var TIME = util.formatTime(new Date());

    this.setData({

      time: TIME,

    });

    this.setData({ //这是修改数据的方式
      src: app.store.src,
      price: app.store.price,
      title: app.store.title,
      time:app.store.time,
      // time:app.dingdan.time,
    })

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