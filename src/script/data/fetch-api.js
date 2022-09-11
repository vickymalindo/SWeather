// TODO: tinggal dicoba di main.js apakah program ini bisa berjalan
class FectchAPI {
  static async api(lat,lon){
    try {
      console.log(lat,lon)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }
}

export default FectchAPI