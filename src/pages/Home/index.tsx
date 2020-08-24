import React, { useEffect } from 'react';

import { Container } from './styles';
import IHardSkills from '../../DTOS/IHardSkills';

import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';
import ProjectsMax from '../../components/Projectsmax';
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
        I am a software engineering student and currently do internship at <a href="https://www.igti.com.br/" rel="noopener noreferrer" target="_blank">
        Institute of the technology</a> and work as a freelance fullstack developer mainly in <a href="https://pt-br.reactjs.org/" rel="noopener noreferrer" target="_blank">React.js </a>
        and <a href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">React Native</a>. I'm a CSS nerd and I also venture into the user interface design.
      </Sidebar>
      <Section>
        <ProjectsMax />
        <ProjectsMin />
      </Section>
    </Container>
  );
}

export default Home;
