import React, { useEffect } from 'react';

import { Container, Video, Image } from './styles';
import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';

import video1 from '../../assets/brodti/1.mp4';
import video2 from '../../assets/brodti/2.mp4';
import video3 from '../../assets/brodti/3.mp4';
import mobile from '../../assets/brodti/mobile.gif';

const Brodti: React.FC = () => {
  useEffect(() => {

  })

  return (
    <Container>
      <Sidebar></Sidebar>

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
        <Image width="100%" src={mobile} alt="mobile screens"/>
      </Section>


    </Container>
  );
}

export default Brodti;
