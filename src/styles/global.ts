import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --body-bg-color: #fff;
    --header-bg-color: red
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--body-bg-color);
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .bg-table-row-selected {
    background-color: #E0E0E0;
  }

  .hover-row {
    cursor: pointer;
  }
  .swal2-container {
    z-index: 30000!important;
  }
`;
