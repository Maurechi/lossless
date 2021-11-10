import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: 'IBM Plex Sans', sans-serif;
      letter-spacing: 0.05rem;
      font-size: 62.5%;
    }
    #root{
      margin:0 auto;
      background: linear-gradient(90deg,#f7f8bf,#f7f7f5 35%,#e2f1f5) no-repeat;
      min-height: 100vh;
    }
    

    a {
      font-size:1.6rem;
    }
    button {
      cursor:pointer;
      border: none;
      background: transparent;
    }
 `
