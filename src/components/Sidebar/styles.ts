import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 410px;
  height: 100%;

  @media only screen and (max-width: 1300px){
    position: relative;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`

`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 70px;
  color: #FFF;
  width: 300px;

  @media only screen and (min-width: 825px) and (max-width: 1300px){
    width: auto;
  }
`

export const Logo = styled.img`
  width: 200px;

  @media only screen and (max-width: 1300px){
    width: 200px;
  }
`

export const Description = styled.p`
  margin-top: 30px;

  font-size: 14px;
  line-height: 28px;
  color: #949495;

  a {
    color: #fff;
    text-decoration: underline;
  }

`

export const SkillsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;

  img {
    margin-right: 18px;
    width: 35px;
    height: 35px;
  }

  @media only screen and (max-width: 1300px){
    margin: 30px 0 30px;

    img{
    margin-right: 10px;
    width: 30px;
    height: 30px;
    }

  }
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  position: absolute;
  bottom: 100px;
  width: 100%;
  background: #151515;

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

  @media only screen and (max-width: 1300px){
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

export const BackToProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  position: absolute;
  bottom: 100px;
  width: 100%;
  background: #151515;


  a {
    display: flex;
    align-items: center;
    color: #fff;
    transition: 0.2s;

    span {
      margin-top: 2px;
      margin-left: 8px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  div {
    display: flex;

    @media only screen and (max-width: 390px){
      display: block;
    }
  }


  @media only screen and (max-width: 1300px){
  position: relative;
  bottom: 0;
  justify-content: space-between;
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

  @media only screen and (max-width: 1300px){
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
