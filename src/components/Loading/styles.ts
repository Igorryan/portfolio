import styled, { keyframes, css } from 'styled-components';

interface Props {
  out?: boolean
}

const pulseAndOut = keyframes`
    0% {
      transform: scale(1);
      opacity: 1
    }
    50% {
      transform: scale(1.1);
      opacity: 1
    }
    100% {
      transform: scale(0.6);
      opacity: 0;
    }
`

const exit = keyframes`
    0% {
      width: 100vw;
    }
    100% {
      width: 0;
    }
`

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: #161416;
  z-index: 3;

  transition: 1s ease;
  overflow: hidden;

  video {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    video {
      width: 200px;
    }
  }

  ${props => props.out && css`
    animation: ${exit} 1s ease both;
    animation-delay: 0.85s;
    video {
      animation: ${pulseAndOut} 1s ease both;
    }
  `}
`


