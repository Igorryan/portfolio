import React, { useEffect } from 'react';
import IHardSkills from '../../DTOS/IHardSkills';

import { Container, Image } from './styles';
import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';

import mobile from '../../assets/brodti/mobile.gif';
import Logo from '../../assets/netpromoterscore/logo.png';

import NodeIcon from '../../assets/icons/node.svg';
import DockerIcon from '../../assets/icons/docker.svg';
import PostgresIcon from '../../assets/icons/postgres.svg';


const hardSkills: IHardSkills[] = [
  {
    name: 'Node.js',
    icon: NodeIcon,
  },
  {
    name: 'Docker',
    icon: DockerIcon,
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
        API built in Typescript with connection to Postgres database and containerized in a totally ephemeral image, created to receive sensitive data in your instance. API went to production, on an Apache server with SSL certificate that makes the proxy for the Docker port.
        <br /><a href="https://github.com/Igorryan/nps-igti" rel="noopener noreferrer" target="_blank">GitHub</a>
      </Sidebar>
      <Section>
      </Section>
    </Container>
  );
}

export default NetPromoterScore;
