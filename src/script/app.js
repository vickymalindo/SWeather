import './components/find-location'
import './components/temp-item'
import './components/cloud-item'
import './components/wind-item'
import './components/feels-like'
import GeoLocation from './data/geo-location'
import FectchAPI from './data/fetch-api'

const app = () => {
  const findElement = document.querySelector('find-location')
  const tempElement = document.querySelector('temp-item')
  const cloudElement = document.querySelector('cloud-item')
  const windElement = document.querySelector('wind-item')
  const feelsElement = document.querySelector('feels-like')

  const buttonFindClicked = async () => {
    // TODO: tinggal destructer hasil dari geoloacation jangan lupa pake await
    const position = await GeoLocation.location()
    const apiResult = await FectchAPI.api(position[0], position[1])
    findElement.userLocation = apiResult.city.name
    tempElement.temps = apiResult.list[0]
    cloudElement.userCloud = apiResult.list[0]
    windElement.userWind = apiResult.list[0]
    feelsElement.userFeels = apiResult.list[0]
  }
  console.log(process.env.API_KEY)
  findElement.clickEvent = buttonFindClicked
}

export default app