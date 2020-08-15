import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 100%;

  @media only screen and (max-width: 1400px){
    position: relative;
    width: 100%;
  }
`;

export const InfoContainer = styled.div``

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 70px;
  color: #FFF;
  width: 300px;

  @media only screen and (min-width: 825px) and (max-width: 1400px){
    width: auto;
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
    margin-right: 15px;
    width: 30px;
    height: 30px;
  }

  img.iconBorder {
    border: 1px solid #000000;
  }

  @media only screen and (max-width: 1400px){
    margin: 20px 0;

  }
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 100px;
  transition: 0.4s;

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
  }


  @media only screen and (max-width: 1400px){
  position: relative;
  bottom: 0;
  margin: 20px 0 40px;
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
`
