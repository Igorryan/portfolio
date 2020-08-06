import React from 'react';

import { Container, Section } from './styles';

import Sidebar from "../../components/Sidebar";
import ProjectsMax from "../../components/Projectsmax";
import ProjectsMin from "../../components/Projectsmin"

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Section>
        <ProjectsMax />
        <ProjectsMin />
      </Section>


    </Container>
  );
}

export default Home;
