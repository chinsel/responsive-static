import { global } from 'styled-jsx/css';

export default global`
  @font-face {
    font-family: 'Oleo Script Swash Caps';
    src: url('/static/fonts/OleoScriptSwashCaps-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/OpenSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/OpenSans-Regular.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/OpenSans-Italic') format('truetype');
    font-style: italic;
  }

  html, body { font-size: 14pt; }

  body,
  input,
  textarea,
  select,
  button {
    font-family: 'OpenSans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    color: #262626;
  }

  a {
    color: #026cdf;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #0150a7;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  section {
    transition: all 0.5s;
  }
`;
