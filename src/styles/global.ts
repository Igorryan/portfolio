import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  line-height: normal;
}

body {
  background: #151515;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden !important;

}

body, input, button{
  font-family: 'Gothic A1', sans-serif;
  color: #fff;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
}

.headerFixed {
  position: fixed;
  z-index: 1;
  top: 0;
  height: 70px;
  padding: 0 30px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0,.5);
}
`;
