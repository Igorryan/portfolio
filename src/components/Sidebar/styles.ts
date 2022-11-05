import styled, { css, keyframes } from 'styled-components';

interface ContactContainerProps {
  headerFixed: boolean;
}

const rotateIn2Cw = keyframes`
  0% {
    transform: rotate(-45deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
`


export const Container = styled.aside`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 410px;
  height: 92%;

  @media only screen and (max-width: 1400px){
    height: 100%;
  }


  @media only screen and (max-width: 1170px){
    position: relative;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    color: #A5A5A5;
    font-size: 14px;

    transition: color 0.2s;
    margin-bottom: 30px;
    margin-top:5px;

    svg {
      margin-top: -3px;
      margin-left: 6px;
      width: 17px;
      height: 17px;
    }

    :hover {
      color: #fbfbfb;
    }

    @media only screen and (max-width: 1170px){
      margin-bottom: 50px;
  }

  }
`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 70px;
  color: #FFF;
  width: 300px;

  @media only screen and (min-width: 825px) and (max-width: 1170px){
    width: auto;
  }
`

export const Description = styled.p`
  margin-top: 30px;
  font-family: "Gothic A1", -apple-system, system-ui, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 28px;
  color: rgba(148,148,149);

  @media (min-width: 1170px){
    width: 440px;
  }

  a {
    color: #fff;
    font-weight:500;
    text-decoration: underline;
  }

`

export const SkillsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  max-width: 340px;
  flex-wrap: wrap;
  position: relative;

  img {
    margin-right: 10px;
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
    transition: all 0.2s;

    &:hover {
      margin-top: -6px;
    }

    animation: ${rotateIn2Cw} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`

export const ContactContainer = styled.div<ContactContainerProps>`
  display: flex;
  align-items: center;
  left: 0;
  position: absolute;
  bottom: 100px;
  width: 100%;

  @media (max-width: 1395px){
      bottom:40px;

      ${props => props.headerFixed && css`
        background: #202022;
      `}
  }

  div {
    display: flex;
    @media only screen and (max-width: 390px){
      display: block;
    }
  }

  img#profileAvatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: -10px;
  }

  @media only screen and (max-width: 1170px){
  position: relative;
  bottom: 0;
  justify-content: space-between;

  img#profileAvatar {
    margin-top: 0px;
    width: 45px;
    height: 45px;
  }
  }
`

export const Contact = styled.footer`
  display: flex;
  align-items: center;
  font-size: 14px;

  a {
    color: #FFF;
    text-decoration: none;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 390px){
      margin: 8px 0;
    }

    img {
      margin: 0 13px;
      margin-top: -4px;
    }

  }

  @media only screen and (max-width: 1170px){
    font-size: 14px;
    a {
      margin-top: 4px;
      img {
      width: 50%;
      margin: 0 13px;
      margin-top: -3px;
    }
    }

  }
`
