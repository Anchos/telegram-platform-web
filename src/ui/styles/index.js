import { injectGlobal } from 'styled-components'
import woff2 from '../../fonts/open-sans-regular.woff2'
import woff from '../../fonts/open-sans-regular.woff'

export default () => injectGlobal`

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: 
      local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url(${woff2}) format('woff2'),
      url(${woff}) format('woff')
  }

  @media (min-width: 1400px) {
    .container {
        max-width: 1383px;
    }
  }

  * {
    box-sizing: border-box;
  }

  label {
    margin-bottom: 0
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
  }

  .no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  a {
    color: inherit;
    font-family: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0
  }
  
`