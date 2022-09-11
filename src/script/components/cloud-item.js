import Cloud from '../assets/images/cloud.png'

class CloudItem extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
    this.cloud = '....'
  }

  connectedCallback(){
    this.render()
  }

  set userCloud(cloud){
    this._item = cloud
    this.cloud = this._item.weather[0].description
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
        text-align: center;
        height: 100%;
        border-radius: 12px;
      }
      img {
        margin-bottom: 6px;
        width: 100px;
        height: 95px;
      }
      h5 {
        font-size: 20px;
        letter-spacing: 1px;
        text-transform: capitalize;
      }
    </style>

    <div class="container">
      <img src="${Cloud}" alt="" />
      <h5>${this.cloud}</h5>
    </div>
    `
  }
}

customElements.define('cloud-item', CloudItem)