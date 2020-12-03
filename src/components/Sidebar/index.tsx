import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import { Container, InfoContainer, Title, Logo, Description, SkillsContainer, ContactContainer, BackToProjectsContainer, Contact } from './styles';

import ISkills from '../../DTOS/ISkills';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';

import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import AccessIcon from "../../assets/icons/access.svg";
import ProfileAvatar from '../../assets/img/profile.jpeg';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

import { Link } from 'react-router-dom';


interface ISideBar {
  title: string;
  skills: ISkills[];
}

const Sidebar: React.FC<ISideBar> = ({ title, skills, children }) => {
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const [contactPositionScroll, setContactPositionScroll] = useState<boolean>();
  const [seeItAll, setSeeItAll] = useState(false);
  const visibleSkillsQuantity = 5;

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

  const developmentSkills = useMemo(() => {
    return skills.filter(s => s.category === 'development')
  }, [skills])

  const designSkills = useMemo(() => {
    return skills.filter(s => s.category === 'design')
  }, [skills])

  return (
    <Container>
      <ReactTooltip place='top' effect="solid" />

      <InfoContainer>
        <Title>{title}</Title>

        <Description>
          {children}
        </Description>

        <SkillsContainer>
          {developmentSkills.map((skill, i) => (
            <img
              style={{
                display: i < visibleSkillsQuantity || seeItAll ? 'block' : 'none',
                animationDelay: i >= visibleSkillsQuantity ? `${(i-visibleSkillsQuantity) / 5}s` : `${i / visibleSkillsQuantity}s`
              }}
              key={skill.icon}
              data-tip={skill.name}
              src={skill.icon}
              alt={skill.name}></img>
          ))}
        </SkillsContainer>

        <SkillsContainer style={{ display: seeItAll ? 'block' : 'none' }}>
          {designSkills.map((skill, i) => (
            <img
              style={{
                animationDelay: `${(i + developmentSkills.length - visibleSkillsQuantity) / 5}s`
              }}
              key={skill.icon}
              data-tip={skill.name}
              src={skill.icon}
              alt={skill.name}></img>
          ))}

        </SkillsContainer>

        <button onClick={() => setSeeItAll(!seeItAll)}>{seeItAll ? (<>view less<FaCaretUp /></>) : (<>view more<FaCaretDown /></>)}</button>






      </InfoContainer>
      <div style={{ height: 68 }}>

        <ContactContainer ref={contactContainerRef}>
          <Link to="/"><img id="profileAvatar" src={ProfileAvatar} alt="" /></Link>
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
