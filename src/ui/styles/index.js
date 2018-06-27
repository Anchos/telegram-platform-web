import { injectGlobal } from 'styled-components'

export default () => injectGlobal`

  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  .row {
    /* margin-left: 0;
    margin-right: 0; */
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