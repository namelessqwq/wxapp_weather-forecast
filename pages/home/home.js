Page({
  //网络请求封装
  
  getWeatherData(cityid) {
    wx.request({
      url: 'https://v0.yiketianqi.com/api',
      data: {
        version: "v61",
        appid: "43441356",
        appsecret: "u6N2a77I",
        cityid: cityid
      },
      success:(res) => {
          console.log(res)
          const current_city = res.data.city
          const tmp_min = res.data.tem2
          const tmp_max = res.data.tem1
          this.setData({
            current_city,
            tmp_min,
            tmp_max
          })
        }
      }
    )
  },

  data: {
    current_city: "",
    tmp_min: "",
    tmp_max: "",

  },
  onLoad() {
    this.getWeatherData(101200101)
  },

  changeCityBJ() {
    this.getWeatherData(101010100)
  },
  changeCitySH() {
    this.getWeatherData(101020100)
  },
  changeCityWH() {
    this.getWeatherData(101200101)
  }
})