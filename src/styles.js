import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    background: #3C444C;
  }

  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  p {
    margin: 0;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  ol,
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  table {
    border-collapse: collapse;
  }

  input, button, select, textarea {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  a, button, input, label, select, textarea {
    touch-action: manipulation;
  }

  a,
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
`;
