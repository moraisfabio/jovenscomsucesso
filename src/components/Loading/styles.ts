import styled from 'styled-components';

interface LoadingProps {
  display: string;
}
export const Container = styled.div<LoadingProps>`
  padding: 15px;
  background: #333;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display:  ${(props) => props.display || 'none'};;
  z-index: 9999;
  .loading-spinner.active {
    display: block;
  }

  #hourglass {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -32px 0 0 -32px;
  }
`;
