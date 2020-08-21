import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   flex-wrap:wrap;
   margin-bottom: 5%;
   margin-top: 50px;

   @media only screen and (max-width: 1300px){
     flex-wrap: initial;
     flex-direction: column;
   }
`;

export const Project = styled.article`
  height: 338px;
  width: 328px;
  cursor: pointer;

  margin-bottom: 8px;
  margin-left: 8px;
  background: #202022;
  padding: 40px ;
  overflow: hidden;
  transition: 0.1s;

  @media only screen and (max-width: 1300px){
    width: auto;
    height: auto;
    margin-left: 0;

   }
`

export const UpTitle = styled.p`
  font-weight: 600;
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

  @media only screen and (max-width: 1300px){
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
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3em;
`

export const AboutArea = styled.div`
  margin-top: 25px;
`

export const AboutLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #FFF;

  img {
    margin-left: 10px;
    margin-bottom: -2px;
  }
`
