import React from 'react';

import { Container } from './styles';
import IHardSkills from '../../DTOS/IHardSkills';

import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';
import ProjectsMin from '../../components/Projectsmin';

import ReactIcon from '../../assets/icons/react.svg';
import TypescriptIcon from '../../assets/icons/typescript.svg';
import FigmaIcon from '../../assets/icons/figma.svg';

const hardSkills: IHardSkills[] = [
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'ReactJS',
    icon: ReactIcon,
  },
  {
    name: 'Figma',
    icon: FigmaIcon,
  },
]

const Home: React.FC = () => {

  return (
    <Container>
      <Sidebar
        title='Hi, I’m Igor Ryan.'
        hardSkills={hardSkills}>
          I am a technology student and work as a freelance developer,
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
