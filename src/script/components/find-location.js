class FindLocation extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
    this.location = '....'
  }

  connectedCallback(){
    this.render()
  }

  set userLocation(loc){
    this.location = loc
    this.render()
  }
  
  set clickEvent(e){
    this._click = e
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
          margin-top: 40px;
          margin-bottom: 10px;
          padding: 4px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h5 {
          margin-bottom: 5px;
        }
        #find {
          display: inline-block;
          padding: 6px 10px;
          background: #3E3E3E;
          color: #fff;
          border: none;
          border-radius: 5px;
          transiton: transform 2s ease-in-out;
        }
        #find:hover {
          transform: scale(.98)
        }

        @media (min-width: 1024px) {
          .container {
            background: #E2E2E2;
            padding: 20px 28px;
            text-align: center;
            height: 100%;
            width: 100%;
            border-radius: 12px;
            flex-direction: column-reverse;
            justify-content: space-between;
            margin: 0;
          }
          #find {
            margin-bottom: 26px;
          }
        }
      </style>

      <div class="container">
        <div>
          <h5>LOCATION</h5>
          <p>Now you are at <b>${this.location}</b></p>
        </div>
        <button id="find">Weather location</button>
      </div>
    `

    this.shadowDOM.querySelector('#find').addEventListener('click', this._click)
  }
}

customElements.define('find-location', FindLocation)