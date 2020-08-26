import React, { useCallback, useState } from 'react';
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { Container, Project, Title, TagsContainer, Tag, UpTitle, Local, Data } from './styles';

interface IProject {
  title: string;
  uptitle: string;
  local: string;
  date: string;
  tags: string[];
  page: string;
}


const projects: IProject[] = [
  {
    title: 'BrodTi Static Website',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: 'Aug 13, 2020',
    tags: [
      'Web'
    ],
    page: '/brodti'
  },
  {
    title: 'E-commerce integration',
    uptitle: 'Freelancer',
    local: 'Santa Catarina ─ Brazil',
    date: 'Jul 25, 2020',
    tags: [
      'Microsservice'
    ],
    page: ''
  },
  {
    title: 'Study Projects and Apps',
    uptitle: 'Developments',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Last in Jun 13, 2020',
    tags: [
      'Web',
      'Mobile',
    ],
    page: ''
  },
  {
    title: 'Net Promoter Score (NPS)',
    uptitle: 'IGTI',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Apr 14, 2020',
    tags: [
      'API'
    ],
    page: ''
  },
  {
    title: 'University Compartments',
    uptitle: 'PUC MINAS',
    local: 'Belo Horizonte ─ Brazil',
    date: 'Feb 11, 2019',
    tags: [
      'Javascript',
      'Firebase',
    ],
    page: ''
  },

]


const Projectsmin: React.FC = () => {

  const [projectSelected, setProjectSelected] = useState<boolean>(false);
  const [focus, setFocus] = useState<number>();
  const [noProjectsSelected, setNoProjectsSelected] = useState<boolean>(true);

  const history = useHistory();

  const handleSelectedProject = useCallback((id: number) => {
    setFocus(id);
    setProjectSelected(true);
    setNoProjectsSelected(false);
  }, []);

  const handleDeselectedProject = useCallback(() => {
    setProjectSelected(false);
    setNoProjectsSelected(true);
  }, []);

  const handleNavigateToProject = useCallback((page) => {
    history.push(page)
  }, [history])

  return (
    <Container>

      {projects.map(({ uptitle, title, local, date, tags, page }, i) => (
        <motion.div
          whileHover={{ scale: 1.12 }}
          key={i}
        >
          <Project onClick={() => { handleNavigateToProject(page) }} onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(i)} style={{
            opacity: (focus === i && projectSelected) || noProjectsSelected ? 1 : 0.6,
            // marginTop: i % 2 !== 0 ? 25 : 0,
            // marginBottom: i % 2 !== 0 ? -16 : 0,
          }}>
            <UpTitle>{uptitle.toUpperCase()}</UpTitle>
            <Local>{local}</Local>
            <Data>{date}</Data>
            <TagsContainer key={i}>{tags.map((t, id) => (
              <Tag key={id}>{t}</Tag>
            ))}</TagsContainer>
            <Title>
              {title}
            </Title>
          </Project>

        </motion.div>
      ))}

    </Container>
  );
}

export default Projectsmin;
