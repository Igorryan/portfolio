import React from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';
import ProjectsMin from '../../components/Projectsmin';
import Background from '../../components/Background';

const Home: React.FC = () => {

  return (
    <Container>
      <Background />
      <Sidebar />
      <Section>
        {/* <ProjectsMax /> */}
        <ProjectsMin />
      </Section>
    </Container>
  );
}

export default Home;
