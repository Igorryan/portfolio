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
          Hi, I’m<br />
        Igor Ryan.
      </Title>
        <Description>
          I’m a Staff Software Engineer currently working as Tech Lead of the Doc Squad at <span>Algolia</span>. I mostly do front-end development, and I’m a <span>Vue.js</span> and CSS nerd. I can't shut up about test-driven development and utility-first CSS. I also share what I learn on my blog <span>frontstuff.io</span>, or at meetups and conferences.
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
          <a href="https://www.linkedin.com/in/igorryan/" target="_blank">
            <img src={LinkedinIcon} alt="GitHub Icon" />
            <span>Linkedin</span>
            <img src={AccessIcon} alt="" />
          </a>
        </Contact>
        <Contact>
          <a href="https://github.com/Igorryan" target="_blank">
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
