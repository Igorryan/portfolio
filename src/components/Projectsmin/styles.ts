import styled, { keyframes } from 'styled-components';

const flipInHorBottom = keyframes`
  0% {
    -webkit-transform: rotateX(80deg);
            transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }
`

const textFocusIn = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`

const fadeInTop = keyframes`
  0% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.section`
   display: flex;
   flex-wrap:wrap;
   margin-bottom: 5%;

   @media only screen and (max-width: 1170px){
     flex-wrap: initial;
     flex-direction: column;
   }
`;

export const Project = styled.article`
  position: relative;

  height: 338px;
  width: 328px;

  margin-bottom: 8px;
  margin-left: 8px;
  background: #202022;
  overflow: hidden;
  transition: 0.1s;
  cursor: default;

  @media only screen and (max-width: 1170px){
    width: auto;
    min-height: 300px;
    margin: 5px 20px !important;
   }
`

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  @media only screen and (max-width: 1170px){
    flex: 1;
   }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    flex: 1;

    a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    color: #fff;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    animation: ${textFocusIn} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    img {
      width: 16px;
      margin-top: -4px;
      margin-left: 0.5rem;
      opacity: 0.6;
    }
  }

    @media only screen and (max-width: 1170px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 100%;

    a {
      margin-top: 0
    }
   }


  }

  h1 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    animation: ${textFocusIn} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  video {
    width: 100%;
    padding: 10px 10px 0;
    animation: ${flipInHorBottom} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation-delay: 0.2s;
   }
`

export const UpTitle = styled.p`
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.2em;
  padding: 40px 40px 0;
`

export const Local = styled.p`
  color: rgb(148, 148, 149);
  margin-top: 15px;
  font-size: 14px;
  padding: 0px 40px 0;
`

export const Data = styled.p`
  color: rgb(148, 148, 149);
  margin-top: 3px;
  font-size: 14px;
  padding: 0px 40px 0;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 18px;
  padding: 0px 40px 0;

  @media only screen and (max-width: 1170px){
    margin-top: 30px;
  }
`

export const Tag = styled.div`
  font-size: 12px;
  line-height: 2;

  background: #353535;
  margin-right: 10px;
  border-radius: 100px;
  padding: 0px 15px;
  padding-top: 1.5px;
  max-height: 26px;
  word-break: keep-all;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3em;
  word-break: keep-all;
  padding: 0px 40px 0;
  animation: ${fadeInTop} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const Access = styled.div`
  display: flex;
  font-size: 14px;

  padding-left: 40px;
  margin-top: 60px;

  @media only screen and (max-width: 1170px){
    margin-top: 70px;
   }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    color: #fff;

    &:first-of-type {
      margin-right: 12px;
    }

    span {
      margin-right: 10px;
    }

    img {
      width: 16px;
      margin-top: -4px;
      opacity: 0.6;
    }
  }

`
