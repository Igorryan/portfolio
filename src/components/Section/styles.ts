import styled from 'styled-components';

export const Container = styled.div`
  float: right;
  width: 680px;
  padding-bottom: 40px;


  @media only screen and (max-width: 1395px){
  position: absolute;
  right: 10px;
  }

  @media only screen and (max-width: 1170px){
    float: none;
    width: 100%;
  right: 0px;

  }
`;
