// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isZk:[true,true,true],
    latlng:{latitude:23.143,longitude:113.3392}
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
  
  },
  closeDetail: function(e){
    var that = this;
    var arr = that.data.isZk;
    var index = parseInt(e.currentTarget.dataset.index);
    if ( arr[index] ) {
      arr[index]= false
    }else{
      arr[index] = true
    }
    that.setData({
      isZk:arr
    })


  },
  callPhone:function(e){
    var phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  },
  fuZhi : function(e){
    var content = e.currentTarget.dataset.val;
    wx.setClipboardData({
      data: content,
      success: function (res) {
        console.log("复制的内容：", content);
        wx.showModal({
          title: '提示',
          content: '复制成功',
          showCancel:false
        })
      }
    })
  },
  // 打开地图
  goNavigate : function(){
    var that = this;
    wx.openLocation({
      latitude: that.data.latlng.latitude,
      longitude: that.data.latlng.longitude,
      scale: 28
    })
  }
})