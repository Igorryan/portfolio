import React, { useEffect } from 'react';
import IHardSkills from '../../DTOS/IHardSkills';

import { Container, Video, Image } from './styles';
import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';

import video1 from '../../assets/brodti/1.mp4';
import video2 from '../../assets/brodti/2.mp4';
import video3 from '../../assets/brodti/3.mp4';
import mobile from '../../assets/brodti/mobile.gif';
import Logo from '../../assets/brodti/logo_white.svg';

import HTMLIcon from '../../assets/icons/html5.svg';
import CSSIcon from '../../assets/icons/css3.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg';
import JqueryIcon from '../../assets/icons/jquery.svg';


const hardSkills: IHardSkills[] = [
  {
    name: 'HTML5',
    icon: HTMLIcon,
  },
  {
    name: 'CSS3',
    icon: CSSIcon,
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
  },
  {
    name: 'JQuery',
    icon: JqueryIcon,
  },
]

const Brodti: React.FC = () => {

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })

  return (
    <Container>
      <Sidebar title='BrodTi'
        hardSkills={hardSkills} logo={Logo}>
        I am a software engineering student and currently do internship at <a href="https://www.igti.com.br/" rel="noopener noreferrer" target="_blank">
          Institute of the technology</a> and work as a freelance fullstack developer mainly in <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>
      and <a href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">React Native</a>. I'm a CSS nerd and I also venture into the user interface design.
      </Sidebar>
      <Section>
        <Video autoPlay loop muted playsInline>
          <source src={video1} />
        </Video>
        <Video autoPlay loop muted playsInline>
          <source src={video2} />
        </Video>
        <Video autoPlay loop muted playsInline>
          <source src={video3} />
        </Video>
        <Image width="100%" src={mobile} alt="mobile screens" />
      </Section>
    </Container>
  );
}

export default Brodti;
