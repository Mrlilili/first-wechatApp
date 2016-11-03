var order = ['red', 'yellow', 'blue', 'green', 'red'];

Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  scroll: function (e) {
    console.log(e)
  },
  tapMove: function () {
    console.log('move')
  },
  upper: function () {
    console.log('upper')
  },
  lower: function () {
    console.log('lower')
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
})