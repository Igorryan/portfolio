import React from 'react';

import { Container } from './styles';
import ISkills from '../../DTOS/ISkills';

import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';
import ProjectsMin from '../../components/Projectsmin';

import Typescript from '../../assets/icons/typescript.svg';
import ReactJS from '../../assets/icons/reactjs.svg';
import Next from '../../assets/icons/nextjs.svg';
import ReactNative from '../../assets/icons/react-native.svg';
import Node from '../../assets/icons/node.svg';
import GraphQL from '../../assets/icons/graphql.svg';
import JQuery from '../../assets/icons/jquery.svg';
import MongoDB from '../../assets/icons/mongodb.svg';
import PostgreSQL from '../../assets/icons/postgresql.svg';
import Docker from '../../assets/icons/docker.svg';
import CorelDraw from '../../assets/icons/coreldraw.svg';
import Photoshop from '../../assets/icons/photoshop.svg';

import Figma from '../../assets/icons/figma.svg';


const Skills: ISkills[] = [
  {
    name: 'TypeScript',
    icon: Typescript,
    category: 'development'
  },
  {
    name: 'ReactJS',
    icon: ReactJS,
    category: 'development'
  },
  {
    name: 'Next.js',
    icon: Next,
    category: 'development'
  },
  {
    name: 'React Native',
    icon: ReactNative,
    category: 'development'
  },
  {
    name: 'Node.js',
    icon: Node,
    category: 'development'
  },
  {
    name: 'GraphQL',
    icon: GraphQL,
    category: 'development'
  },
  {
    name: 'jQuery',
    icon: JQuery,
    category: 'development'
  },
  {
    name: 'MongoDB',
    icon: MongoDB,
    category: 'development'
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    category: 'development'
  },
  {
    name: 'Docker',
    icon: Docker,
    category: 'development'
  },
  {
    name: 'Figma',
    icon: Figma,
    category: 'design'
  },
  {
    name: 'Corel Draw',
    icon: CorelDraw,
    category: 'design'
  },
  {
    name: 'Photoshop',
    icon: Photoshop,
    category: 'design'
  },

]

const Home: React.FC = () => {

  return (
    <Container>
      <Sidebar
        title='Hi, I’m Igor Ryan.'
        skills={Skills}>
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
