// pages/scar/scar.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden: true, //弹出
    actionSheetItems: ['item1', 'item2', 'item3', 'item4'],
    src: null,
    price: null,
    title: null,
    x: true,
    isChecked: true,
    num: 1,
  },
  pay:function(){
    
    wx.navigateTo({
      url: '../' + 'settlement' + '/' + 'settlement'
    })
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  bindItemTap: function(e) {
    console.log('tap ' + e.currentTarget.dataset.name);
  },
  all: function(e) {
    this.setData({
      isChecked: true,
    })
  },
  bindMinus: function() {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function() {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function(e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },
  checkboxChange: function(e) {
    let isChecked = e.currentTarget.dataset.checked;
    if (isChecked == "false" || isChecked == false) { //即将选中   将其值设为true
      isChecked = true;
    } else {
      isChecked = false;
    }
    this.setData({
      isChecked: isChecked
    });
    console.log(isChecked)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({ //这是修改数据的方式
      src: app.store.src,
      price: app.store.price,
      title: app.store.title,
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