class TempItem extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
    this.tempMain = '....'
    this.tempMax = '....'
    this.tempMin = '....'
    this.hum = '....'
    this.pressure = '....'
  }

  connectedCallback(){
    this.render()
  }

  set temps(temperature){
    this._items = temperature
    this.tempMain = (this._items.main.temp - 273).toFixed(2)
    this.tempMax = (this._items.main.temp_max - 273).toFixed(2)
    this.tempMin = (this._items.main.temp_min - 273).toFixed(2)
    this.hum = this._items.main.humidity
    this.pressure = this._items.main.pressure
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
          height: 100%;
          border-radius: 12px;
        }
        .temperature {
          margin-top: 20px;
          text-align: center;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }
        .temperature h3 {
          font-size: 32px;
          margin-bottom: 4px;
        }
        .temperature h5 {
          font-size: 1.2rem;
        }
        p {
          letter-spacing: 1px;
        }
      </style>

      <div class="container">
        <div class="temperature">
          <h3>${this.tempMain}&deg;C</h3>
          <h5>${this.tempMin}&deg;C — ${this.tempMax}&deg;C</h5>
        </div>
        <p>Humidity = ${this.hum}</p>
        <p>Pressure = ${this.pressure} hPa</p>
      </div>
    `
  }
}

customElements.define('temp-item', TempItem)