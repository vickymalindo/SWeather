import Wind from '../assets/images/wind.png'

class WindItem extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
    this.speed = '....'
    this.degree = '....'
    this.gust = '....'
  }

  connectedCallback(){
    this.render()
  }

  set userWind(wind){
    this._items = wind
    this.speed = this._items.wind.speed
    this.degree = this._items.wind.deg
    this.gust = this._items.wind.gust
    this.render()
  }

  render(){
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          background: #E2E2E2;
          padding: 12px 20px;
          border-radius: 12px;
          height: 100%;
        }
        img {
          display: block;
          margin: auto;
          width: 95px;
          height: 89px;
        }
      </style>

      <div class="container">
        <img src="${Wind}" alt="wind" />
        <p>Wind Speed = ${this.speed} &#13223;</p>
        <p>Wind Degree = ${this.degree}&deg;</p>
        <p>Wind Gust = ${this.gust} &#13223;</p>
      </div>
    `
  }
}

customElements.define('wind-item', WindItem)