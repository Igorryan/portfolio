import React, { useState, useCallback } from 'react';
import { motion } from "framer-motion";

import { Container, Header, Project, Title, Description, TagsContainer, Tag } from './styles';

interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[]
}

const projects: IProject[] = [
  {
    id: 1,
    title: 'Exclusive E-commerce',
    description: 'The exclusive is an e-commerce for selling clothes with unique prints. A project developed entirely by me.',
    tags: [
      'Backend', 'Web', 'UI Design'
    ]
  },
  {
    id: 1,
    title: 'Brodti Website',
    description: 'BrodTi.com aims to reward the Internet users for the value they add to any corporate brand. I intend to use WebGL technology in the development.',
    tags: [
      'Freelancer', 'Website'
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
      {projects.map(({ id, title, description, tags }, i) => (
        <motion.div
          whileHover={{ scale: 1.12 }}
          key={id}
        >
          <Project onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(id)} style={{
            opacity: focus === id && projectSelected || noProjectsSelected ? 1 : 0.7,
          }}>
            <Header>
            <Title>{title}</Title>
            <span>Online</span>
            </Header>
            <Description>{description}</Description>
            <TagsContainer key={id}>
              {tags.map((t, id) => (
                <Tag key={id}>{t}</Tag>
              ))}
            </TagsContainer>
          </Project>
        </motion.div>
      ))}

    </Container>
  );
}

export default Projectsmax;
