import React, { useState, useCallback } from 'react';
import { motion } from "framer-motion";

import { Container, Header, Project, Title, Description, TagsContainer, Tag } from './styles';

interface IProject {
  title: string;
  description: string;
  tags: string[]
}

const projects: IProject[] = [
  {
    title: 'Shaay',
    description: 'It is a SaaS that aims to provide a modern digital panel for companies to post their notices, rules, announcements and more.',
    tags: [
      'Backend', 'Frontend', 'UI Design'
    ]
  },
  {
    title: 'MyTipLife.com',
    description: 'The exclusive is an e-commerce for selling clothes with unique prints. A project developed entirely by me.',
    tags: [
      'Frontend',
    ]
  },
]

const Projectsmax: React.FC = () => {

  const [projectSelected, setProjectSelected] = useState<boolean>(false);
  const [focus, setFocus] = useState<number>();
  const [noProjectsSelected, setNoProjectsSelected] = useState<boolean>(true);

  const handleSelectedProject = useCallback((id: number) => {
    setFocus(id);
    setProjectSelected(true);
    setNoProjectsSelected(false);
  }, []);

  const handleDeselectedProject = useCallback(() => {
    setProjectSelected(false);
    setNoProjectsSelected(true);
  }, []);

  return (
    <Container>
        {projects.map(({title, description, tags }, i) => (
          <motion.div
            whileHover={{ scale: 1.12 }}
            key={i}
          >
            <Project onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(i)} style={{
              opacity: (focus === i && projectSelected) || noProjectsSelected ? 1 : 0.6,
            }}>
              <Header>
                <Title>{title}</Title>
                <span>Developing</span>
              </Header>
              <Description>{description}</Description>
              <TagsContainer key={i}>
                {tags.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </TagsContainer>
            </Project>
          </motion.div>
        ))}
    </Container>
  );
}

export default Projectsmax;
