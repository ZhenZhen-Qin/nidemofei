// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    markers: [],
    previous:0,// 上一个的滑块索引
    currentSwiperItem:0,// 当前所在的滑块
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var img = "https://f11.baidu.com/it/u=3391944794,113740464&fm=72";
    var arr = [
      { "headImg": img, "shopName": "公共厕所1", "pingfen": 3, "comment": 20, "summary": "ghro价格绕过热干扰个IE人工湖热狗肉火锅蓉儿 何荣而过个人5t4egress热GRE", "latlng": { latitude: 23.089994, longitude: 113.324520}},
      { "headImg": img, "shopName": "公共厕所2", "pingfen": 3, "comment": 20, "summary": "ghro价格绕过热干扰个IE人工湖热狗肉火锅蓉儿 何荣而过个人Greg人人二哥儿个人人", "latlng": { latitude: 23.099994, longitude: 113.324520 } },
      { "headImg": img, "shopName": "公共厕所3", "pingfen": 3, "comment": 20, "summary": "ghro价格绕过热干扰个IE人工湖热狗肉火锅蓉儿 何荣而过个人", "latlng": { latitude: 23.069994, longitude: 113.324520 } },
    ]
    for (var i = 0 ; i < arr.length ; i++ ) {
      var content = arr[i].summary;
      console.log("length:", content.length);
      if (content.length > 28) {
        arr[i].summary = content.substring(0, 28) + "...";
      }
    }
    var markers = that.data.markers;
    for ( var i = 0 ; i < arr.length ; i++ ) {
      var latlng = arr[i].latlng;
      var iconPath = "../imgs/xcx2.png";
      if ( i == 0 ) {
        iconPath = "../imgs/zpcode.jpg"
      }
      var obj =  {
          iconPath:iconPath,
          id: i,
          latitude: latlng.latitude,
          longitude: latlng.longitude,
          width:20,
          height: 20,
        // label: { content: i + "", color: "#AE0000", x: 0, y: -55, padding: 5, borderRadius:50}
      }
      markers.push(obj);
    }
    // []
    that.setData({ list: arr, markers:markers});
   
    wx.getLocation({
      success: function(res) {
        console.log("location:",res);
      },
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
  
  },
  // 当滑块改变时触发
  bindSwiperChange : function(e){
    var that = this;
    // var iconPath = "../imgs/xcx2.png";
    // if (i == 0) {
    //   iconPath = "../imgs/zpcode.jpg"
    // }
    var detail = e.detail ;//{ current: current, source: source }
    console.log("detail:",detail)
    var markers = that.data.markers;
    markers[detail.current].iconPath = "../imgs/zpcode.jpg";
    markers[that.data.previous].iconPath = "../imgs/xcx2.png";
    that.setData({ markers: markers, previous:detail.current,});
  },
  //点击markers上的标记时候触发
  markertap : function(e){
    var that = this;
    console.log("点击标记点：",e)
    var currentSwiperItem = that.data.currentSwiperItem;
    currentSwiperItem = e.markerId;
    that.setData({ currentSwiperItem : currentSwiperItem})
    
  }
})