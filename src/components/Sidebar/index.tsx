import React, { useEffect, useCallback, useState, useRef} from 'react';
import { Container, InfoContainer, Title, Logo, Description, SkillsContainer, ContactContainer, Contact } from './styles';

import IHardSkills from '../../DTOS/IHardSkills';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';

import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import AccessIcon from "../../assets/icons/access.svg";
import ProfileAvatar from '../../assets/profile.jpeg';

interface ISideBar {
  title: string;
  hardSkills: IHardSkills[];
  logo?: string;
}

const Sidebar: React.FC<ISideBar> = ({ logo, title, hardSkills, children }) => {
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const [contactPositionScroll, setContactPositionScroll] = useState<boolean>();

  useEffect(() => {
    window.addEventListener('scroll', verifyScroll);
  });

  const verifyScroll = useCallback(() => {
    if (contactContainerRef.current?.offsetTop && window.scrollY >= contactContainerRef.current?.offsetTop + 200) {
      if (!contactPositionScroll) {
        const windowSize = $(window).width();
        if (windowSize && windowSize < 1400) {
          contactContainerRef.current?.classList.add('headerFixed');
          $(contactContainerRef.current).hide();
          $(contactContainerRef.current).slideDown(200);
          setContactPositionScroll(true)
        }
      };
    } else if (window.scrollY <= 369 && !contactPositionScroll) {
      contactContainerRef.current?.classList.remove('headerFixed')
      setContactPositionScroll(false);
    }
  }, [contactPositionScroll]);

  return (
    <Container>
      <ReactTooltip place='top' effect="solid" />

      <InfoContainer>
        {logo ? <Logo src={logo}/> : <Title>{title}</Title>}

        <Description>
          {children}
        </Description>

        <SkillsContainer>
          {hardSkills.map(skill => (
            <img key={skill.icon} data-tip={skill.name} src={skill.icon} alt={skill.name}></img>
          ))}
        </SkillsContainer>
      </InfoContainer>
      <div style={{ height: 100 }}>
        <ContactContainer ref={contactContainerRef}>
          <img id="profileAvatar" src={ProfileAvatar} alt="" />
          <div>
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
          </div>
        </ContactContainer>
      </div>

    </Container>
  )
}

export default Sidebar;
