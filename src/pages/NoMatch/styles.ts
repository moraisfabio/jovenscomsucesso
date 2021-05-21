import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100vh;

  .notfound {
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .notfound-404 {
    line-height: 1.4;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    height: 240px;
  }

  .notfound-404 h1 {
    line-height: 1.4;
    text-align: center;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 252px;
    font-weight: 900;
    margin: 0px;
    color: #262626;
    text-transform: uppercase;
    letter-spacing: -40px;
    margin-left: -20px;
  }

  .notfound .notfound-404 h1>span{
    line-height: 1.4;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 252px;
    font-weight: 900;
    color: #262626;
    text-transform: uppercase;
    letter-spacing: -40px;
    box-sizing: border-box;
    text-shadow: -8px 0px 0px #fff;
  }

  .pagetitle {
    color: red;
  }
`;
