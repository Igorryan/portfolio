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
      <Sidebar>
        I’m a technology student and work as a freelance developer,
          my vocation is <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">ReactJS</a>, <a href="https://nextjs.org" rel="noopener noreferrer" target="_blank">Next.js</a> and <a href="https://reactnative.dev" rel="noopener noreferrer" target="_blank">React Native</a>. I'm a CSS nerd and I love talking about code, UI / UX and motions.
      </Sidebar>
      <Section>
        {/* <ProjectsMax /> */}
        <ProjectsMin />
      </Section>
    </Container>
  );
}

export default Home;
