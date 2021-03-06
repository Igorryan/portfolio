import styled from 'styled-components';

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
  padding: 40px ;
  overflow: hidden;
  transition: 0.1s;
  cursor: default;

  @media only screen and (max-width: 1170px){
    width: auto;
    min-height: 300px;
    height: auto;
    margin: 5px 20px !important;
   }
`

export const UpTitle = styled.p`
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.2em;
`

export const Local = styled.p`
  color: rgb(148, 148, 149);
  margin-top: 15px;
  font-size: 14px;
`

export const Data = styled.p`
  color: rgb(148, 148, 149);
  margin-top: 3px;
  font-size: 14px;

`
export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 18px;

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
`

export const Access = styled.div`
  display: flex;

  position: absolute;

  bottom: 30px;
  left: 35px;

  font-size: 14px;

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
