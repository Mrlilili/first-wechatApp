var types = ['default', 'primary', 'warn'];
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function () {

    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function () {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function () {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for (var i = 0; i < types.length; i++) {
  (function (type) {
    pageObject[type] = function () {

    }
  })(types[i])
}

Page()