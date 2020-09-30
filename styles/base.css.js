import { global } from 'styled-jsx/css';

export default global`
  @font-face {
    font-family: 'Averta';
    src: url('/static/fonts/Averta-Regular.woff2') format('woff2'),
         url('/static/fonts/Averta-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Averta';
    src: url('/static/fonts/Averta-SemiBold.woff2') format('woff2'),
         url('/static/fonts/Averta-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Averta';
    src: url('/static/fonts/Averta-ExtraBold.woff2') format('woff2'),
         url('/static/fonts/Averta-ExtraBold.woff') format('woff');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Averta';
    src: url('/static/fonts/Averta-RegularItalic.woff2') format('woff2'),
         url('/static/fonts/Averta-RegularItalic.woff') format('woff');
    font-style: italic;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: 'Averta', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

  .bodyLock {
    position: fixed;
    width: 100%;
  }

  #Cardinal-Modal {
    z-index: 29;
  }

  #Cardinal-Overlay {
    z-index: 28;
  }
`;
