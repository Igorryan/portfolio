import React from 'react';

import { Container, InfoContainer, Title, Description, SkillsContainer, ContactContainer, Contact } from './styles';

import JavascriptIcon from '../../assets/icons/jsicon.svg';
import TypescriptIcon from '../../assets/icons/tsicon.svg';
import FigmaIcon from '../../assets/icons/figmaicon.svg';

import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import AccessIcon from "../../assets/icons/access.svg"

import ProfileAvatar from '../../assets/profile.jpeg';

const Sidebar: React.FC = () => {
  return (
    <Container>

      <InfoContainer>
        <Title>
          Hi, I’m
          Igor Ryan.
      </Title>
        <Description>
        I am a software engineering student and currently do internship at <a href="https://www.igti.com.br/" rel="noopener noreferrer" target="_blank">Institute of the technology</a> and work as a freelance developer mainly in front-ends. I'm a CSS nerd, <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a> and <a href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">React Native</a>. I also venture into the user interface design.
      </Description>

        <SkillsContainer>
          <img src={TypescriptIcon} alt="Typescript"></img>
          <img src={JavascriptIcon} alt="Javascript"></img>
          <img className="iconBorder" src={FigmaIcon} alt="Figma"></img>
        </SkillsContainer>
      </InfoContainer>

      <ContactContainer>
        <img id="profileAvatar" src={ProfileAvatar} alt="" />

        <Contact>
          <a href="https://www.linkedin.com/in/igorryan/" rel="noopener noreferrer" target="_blank">
            <img src={LinkedinIcon} alt="GitHub Icon" />
            <span>Linkedin</span>
            <img src={AccessIcon} alt="" />
          </a>
        </Contact>
        <Contact>
          <a href="https://github.com/Igorryan" rel="noopener noreferrer" target="_blank">
            <img src={GithubIcon} alt="GitHub Icon" />
            <span>GitHub</span>
            <img src={AccessIcon} alt="" />
          </a>
        </Contact>
      </ContactContainer>

    </Container>
  )
}

export default Sidebar;
