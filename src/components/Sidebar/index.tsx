import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';
import { Container, InfoContainer, Title, Description, SkillsContainer, ContactContainer, Contact } from './styles';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip';
import $ from 'jquery';


import Skills from '../../data/Skills';

import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import AccessIcon from "../../assets/icons/access.svg";
import ProfileAvatar from '../../assets/img/profile.jpeg';

const Sidebar: React.FC = () => {
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const [contactPositionScroll, setContactPositionScroll] = useState<boolean>(false);
  const [seeItAll, setSeeItAll] = useState(false);
  const visibleSkillsQuantity = 5;
  const [distanceContact, setDistanceContact] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', verifyScroll);
  });

  const verifyScroll = useCallback(() => {

    const distance = contactContainerRef.current?.offsetTop || 0

    if(distance !== 0){
      setDistanceContact(distance)
    }

    if (contactContainerRef.current?.offsetTop && window.scrollY >= contactContainerRef.current?.offsetTop + 200) {
      if (!contactPositionScroll) {
        const windowSize = $(window).width();
        if (windowSize && windowSize < 1170) {
          contactContainerRef.current?.classList.add('headerFixed');
          $(contactContainerRef.current).hide();
          $(contactContainerRef.current).slideDown(200);
          setContactPositionScroll(true)
        }
      }
    } else if (window.scrollY <= distanceContact && !contactPositionScroll) {
      contactContainerRef.current?.classList.remove('headerFixed')
      setContactPositionScroll(false);
    }
  }, [contactPositionScroll, distanceContact]);

  const developmentSkills = useMemo(() => {
    return Skills.filter(s => s.category === 'development')
  }, [])

  const designSkills = useMemo(() => {
    return Skills.filter(s => s.category === 'design')
  }, [])

  return (
    <Container>
      <ReactTooltip place='top' effect="solid" />

      <InfoContainer>
        <Title>Hi, I’m Igor Ryan.</Title>
        <Description>
        I'm a Software Engineer and currently working as a front-end developer with <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">React.JS</a>, <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">Next.js</a> and UI/UX Designer.
        I'm improving my mobile development techniques with <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">React Native</a>.
        I am passionate about teamwork, leadership and technology. You can call me for a coffee ☕, if we're going to talk about entrepreneurship.
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

        <SkillsContainer style={{ display: seeItAll ? 'flex' : 'none' }}>
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

        <ContactContainer headerFixed={contactPositionScroll} ref={contactContainerRef}>
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
