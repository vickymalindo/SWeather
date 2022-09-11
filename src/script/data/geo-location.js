class GeoLocation {
  static success(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    return [latitude, longitude]
  }

  static error(){
    return ('Unable to retrieve your location')
  }

  static location(){
    if(!navigator.geolocation){
      alert('Your browser does not support this feature')
    } else{
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(this.success(pos))
          },
          () => {
            reject(this.error())
          }
        )
      })
    }
  }
  

}

export default GeoLocation