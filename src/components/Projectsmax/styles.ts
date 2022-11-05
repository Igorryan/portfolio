import styled from 'styled-components';


export const Container = styled.section`
  margin-top: 10px;
`;

export const Project = styled.article`
  margin: 0 8px 8px 8px;
  background: #202022;
  padding: 40px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1s;

  @media only screen and (max-width: 1170px){
  margin: 0 0 8px 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  span {
    color:rgb(148, 148, 149);
    line-height: 20.8px;
    font-size: 12px;
  }
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3em;
`

export const Description = styled.p`
  margin: 20px 0;

  font-size: 14px;
  color:rgb(148, 148, 149);
  line-height: 20.8px;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
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
