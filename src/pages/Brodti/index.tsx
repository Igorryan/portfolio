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
      <Sidebar
        title='BrodTi'
        hardSkills={hardSkills} logo={Logo}
        backArrow
        >
        In this freelancer project, I received the layout of the entire site to develop. I implemented it faithfully and took the opportunity to add an addictive slide show.
        <br /><a href="https://www.brodti.com/" rel="noopener noreferrer" target="_blank">www.brodti.com</a>
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
