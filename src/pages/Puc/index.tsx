import React, { useEffect } from 'react';
import IHardSkills from '../../DTOS/IHardSkills';

import { Container, Video, Image, InfoWrapper } from './styles';
import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';

import Logo from '../../assets/puc/logo.png';
import Picture from '../../assets/puc/picture.jpg';
import videoMobile from '../../assets/puc/mobile.mp4';
import videoWeb from '../../assets/puc/web.mp4';

import FirebaseIcon from '../../assets/icons/firebase.svg';
import HTMLIcon from '../../assets/icons/html5.svg';
import CSSIcon from '../../assets/icons/css3.svg';
import JavascriptIcon from '../../assets/icons/javascript.svg';


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
    name: 'Firebase',
    icon: FirebaseIcon,
  },
]

const NetPromoterScore: React.FC = () => {

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })

  return (
    <Container>
      <Sidebar
        title='Net Promoter Score'
        hardSkills={hardSkills}
        logo={Logo}
        backArrow
      >
        Web application developed for the Veterinary Medicine Course, PUC Minas Liberty Square as a university employee.
      </Sidebar>
      <Section>
        <Video autoPlay loop muted playsInline>
          <source src={videoWeb} />
        </Video>

        <InfoWrapper>
          QR Code<br />technology
          <div className="picture">
            <Video autoPlay loop muted playsInline>
              <source src={videoMobile} />
            </Video>
          </div>
        </InfoWrapper>

        <Image src={Picture} alt="Eue gus"></Image>

      </Section>
    </Container>
  );
}

export default NetPromoterScore;
