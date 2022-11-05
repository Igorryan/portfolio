import styled from 'styled-components';

export const Container = styled.div`
  margin: 75px auto;
  width: 1300px;
  line-height: 80px;
  font-family: 'Gothic A1', sans-serif;
  height: 100%;

  @media only screen and (max-width: 1395px){
    width:100vw;
    margin: 25px;
  }

  @media only screen and (max-width: 1630px){
    width:80vw;
  }

  @media only screen and (max-width: 1170px){
    width:  88vw;
    margin: 35px auto;
  }
`;
