import styled from 'styled-components';

export const Container = styled.div`
  float: right;
  width: 680px;


  @media only screen and (max-width: 1350px){
  position: absolute;
  right: 10px;
  }

  @media only screen and (max-width: 1100px){
    float: none;
    width: 100%;
  right: 0px;

  }
`;
