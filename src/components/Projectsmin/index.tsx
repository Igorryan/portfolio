import React, { useCallback, useState } from 'react';
import { motion } from "framer-motion";

import { Container, Project, Title, TagsContainer, Tag, UpTitle, Local, Data, AboutArea, AboutLink } from './styles';

import AboutIcon from '../../assets/icons/access.svg';

interface IProject {
  id: number;
  title: string;
  uptitle: string;
  local: string;
  date: string;
  tags: string[];
  about: string;
}


const projects: IProject[] = [
  {
    id: 1,
    title: 'Net Promoter Score (NPS)',
    uptitle: 'IGTI',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Jul 14, 2020',
    tags: [
      'API'
    ],
    about: 'Preparar um resumo para apresentar aqui.'
  },
  {
    id: 2,
    title: 'University Compartments',
    uptitle: 'PUC MINAS',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Feb 11, 2019',
    tags: [
      'Javascript',
      'Firebase',
    ],
    about: 'I developed to assist and optimize the management of the compartments made available to students. Besides being my first published project.'
  },
  {
    id: 3,
    title: 'E-commerce integration',
    uptitle: 'Freelancer',
    local: 'Santa Catarina ─ Brazil',
    date: 'Jul 25, 2020',
    tags: [
      'Microsservice'
    ],
    about: 'Preparar um resumo para apresentar aqui.'
  },
  {
    id: 4,
    title: 'Study Projects and Apps',
    uptitle: 'Developments',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Last in Jun 13, 2020',
    tags: [
      'Web',
      'Mobile',
    ],
    about: 'Preparar um resumo para apresentar aqui.'
  },

]


const Projectsmin: React.FC = () => {

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

      {projects.map(({ id, uptitle, title, local, date, tags }, i) => (
        <motion.div
          whileHover={{ scale: 1.12 }}
          key={id}
        >
          <Project onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(id)} style={{
            opacity: (focus === id && projectSelected) || noProjectsSelected ? 1 : 0.6,
            //marginTop: id % 2 === 0 ? 25 : 0,
            //marginBottom: id % 2 === 0 ? -16 : 0,
          }}>
            <UpTitle>{uptitle.toUpperCase()}</UpTitle>
            <Local>{local}</Local>
            <Data>{date}</Data>
            <TagsContainer key={id}>{tags.map((t, id) => (
              <Tag key={id}>{t}</Tag>
            ))}</TagsContainer>
            <Title>
              {title}
            </Title>
            <AboutArea><AboutLink href="#">About <img src={AboutIcon} alt="About"></img></AboutLink></AboutArea>
          </Project>

        </motion.div>
      ))}

    </Container>
  );
}

export default Projectsmin;
