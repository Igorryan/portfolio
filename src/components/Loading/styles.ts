import styled, { keyframes, css } from 'styled-components';

interface Props {
  out?: boolean
}

const opacityIn = keyframes`
    0% {
      transform: scale(0.9);
      opacity: 0
    }

    100% {
      transform: scale(1);
      opacity: 1
    }
`

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

  img {
    position: absolute;

    width: 300px;

    opacity: 0;
    z-index: 2;

    animation: ${opacityIn} 0.6s ease both;
    animation-delay: 0.4s;
  }

  video {
    width: 400px;
    height: 400px;
    z-index: 3;
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
    }
    video {
      width: 200px;
    }
  }

  ${props => props.out && css`
    animation: ${exit} 1s ease both;
    animation-delay: 0.85s;

    img {
      animation: ${pulseAndOut} 0.6s ease both;
    }

    video {
      animation: ${pulseAndOut} .8s ease both;
    }
  `}
`


