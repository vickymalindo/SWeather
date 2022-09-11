class FeelsLike extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
    this.sea = '....'
    this.ground = '....'
    this.feels = '....'
    this.visibility = '....'
  }

  connectedCallback(){
    this.render()
  }

  set userFeels(feels){
    this._items = feels
    this.sea = this._items.main.sea_level
    this.ground = this._items.main.grnd_level
    this.feels = (this._items.main.feels_like - 273).toFixed(2)
    this.visibility = this._items.visibility
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
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          border-radius: 12px;
        }
        .container h3 {
          text-align: center;
          font-size: 22px;
        }
      </style>

      <div class="container">
        <div>
          <p>Sea Level = ${this.sea} hPa</p>
          <p>Feels Like = ${this.feels}&deg;C</p>
          <p>Ground Level = ${this.ground} hPa</p>
          <p>Visibility = ${this.visibility}</p>
        </div>
      </div>
    `
  }
}

customElements.define('feels-like', FeelsLike)