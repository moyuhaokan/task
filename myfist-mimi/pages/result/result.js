var app = getApp()
Page({
    data: {
  currentTab: 0
},
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  onLoad: function (options) {
    var self = this
    wx.getStorage({
      key: 'key',
      success: function (res) {
        self.setData({
          navbar: res.data,
        })
        var key = res.data;
        wx.request({
          url: "http://www.jnshu.com/a/occupation/list",
          success: function (res) {
            for (var i = 0; i < 13; i++) {
              if (key[0] == res.data.data.occupations[i].name) {
                self.setData({
                  name: res.data.data.occupations[i]
                })
                  self.setData({
                      learning: self.data.name.onlineUserCount,
                    threshold: self.data.name.threshold,
                    difficult: self.data.name.difficult,
                    cycle: self.data.name.cycle,
                    company: self.data.name.company,
                    basis: self.data.name.basis,
                    salary: JSON.parse(self.data.name.salary)
                  })
              }
              if (key[1] == res.data.data.occupations[i].name) {
                self.setData({
                  name1: res.data.data.occupations[i],
                })
                self.setData({
                  learning1: self.data.name1.onlineUserCount,
                  threshold1: self.data.name1.threshold,
                  difficult1: self.data.name1.difficult,
                  cycle1: self.data.name1.cycle,
                  company1: self.data.name1.company,
                  basis1: self.data.name1.basis,
                  salary1: JSON.parse(self.data.name1.salary)
                })
              }
              if (key[2] == res.data.data.occupations[i].name) {
                self.setData({
                  name2: res.data.data.occupations[i],
                })
                self.setData({
                  learning2: self.data.name2.onlineUserCount,
                  threshold2: self.data.name2.threshold,
                  difficult2: self.data.name2.difficult,
                  cycle2: self.data.name2.cycle,
                  company2: self.data.name2.company,
                  basis2: self.data.name2.basis,
                  salary2: JSON.parse(self.data.name2.salary)
                })
              }
            }
          }
        })
      }
    })
 }
})


