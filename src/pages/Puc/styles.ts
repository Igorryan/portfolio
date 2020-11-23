import styled from 'styled-components';

export const Container = styled.div`
  margin: 75px auto;
  width: 1300px;
  line-height: 80px;
  font-family: 'Gothic A1', sans-serif;
  height: 100%;


  @media only screen and (max-width: 1630px){
    width:80vw;
  }

  @media only screen and (max-width: 1100px){
    width:88vw;
    margin: 35px auto;
  }
`;

export const Video = styled.video`
  width: 100%;
  border-radius: 20px;
`

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 32px;
  font-weight: 900;
  margin-top: 40px;
  color: #fafafa;

  div.picture {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;

    video {
      margin-top: -60px;
    }
  }
`

export const Image = styled.img`
  margin: 40px 0;
  width: 100%;
  border-radius: 20px;
`
