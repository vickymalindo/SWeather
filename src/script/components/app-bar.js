import myLogo from '../assets/images/logo.png'

class AppBar extends HTMLElement {
  constructor(){
    super()
    this.shadowDOM = this.attachShadow({mode: 'open'})
  }

  connectedCallback(){
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
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          position: relative;
          z-index: 5;
          top: 50px;
        }
        .logo {
          width: 200px;
          height: 210px;
        }
        .logo_title {
          text-align: center;
          letter-spacing: 3px;
          font-size: 28px;
        }
        .logo_tagline {
          margin-top: 15px;
        }

        @media (min-width: 640px) {
          header {
            flex-direction: row;
            gap: 15px;
          }
          .logo_title {
            text-align: start;
          }
          .logo_tagline {
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
          header {
            gap: 40px;
          }
          img {
            margin-right: 15px;
          }
        }
      </style>

      <header>
        <img src="${myLogo}" alt="logo" class="logo"/>
        <div class="name_logo">
          <h2 class="logo_title">S W e a t h e r. </h2>
          <p class="logo_tagline">—  Wherever you go, no matter what the weather, always bring your own sunshine.</p>
        </div>
      </header>
    `
  }
}

customElements.define('app-bar', AppBar)