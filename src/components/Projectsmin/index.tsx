import React, { useCallback, useState, useMemo } from 'react';
import { motion } from "framer-motion";
import AccessIcon from "../../assets/icons/access.svg";

import { Container, Project, Title, TagsContainer, Tag, UpTitle, Local, Data, Access } from './styles';

interface IProject {
  title: string;
  uptitle: string;
  local: string;
  date: Date;
  tags: string[];
  link: string;
  linkLabel: string
}


const projects: IProject[] = [
  {
    title: 'BrodTi',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: new Date(2020, 7, 9),
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    link: 'http://brodti.com',
    linkLabel: 'Website'
  },
  {
    title: 'API Net Promoter Score (NPS)',
    uptitle: 'IGTI',
    local: 'Belo Horizonte ─ Brazil',
    date: new Date(2020, 3, 14),
    tags: [
      'Node.js',
      'Docker',
    ],
    link: 'https://github.com/Igorryan/nps-igti',
    linkLabel: 'GitHub'
  },
  {
    title: 'University Compartments',
    uptitle: 'PUC MINAS',
    local: 'Belo Horizonte ─ Brazil',
    date: new Date(2019, 1, 11),
    tags: [
      'Javascript',
      'Firebase',
    ],
    link: 'https://github.com/Igorryan/escaninhos-pucminas',
    linkLabel: 'GitHub'
  },
  {
    title: 'MyTipLife E-commerce',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: new Date(2020, 11, 1),
    tags: [
      'Frontend',
      'Next.js',
    ],
    link: 'https://mytiplife.vercel.app',
    linkLabel: 'Application'
  },
  {
    title: 'Mayor Gandini23',
    uptitle: 'Freelancer',
    local: 'Vitória ─ Brazil',
    date: new Date(2020, 7, 24),
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    link: 'https://www.gandini23.com.br',
    linkLabel: 'Website'
  },
  {
    title: 'Go Barber',
    uptitle: 'Study Project',
    local: 'Online ─ Rocketseat',
    date: new Date(2020, 6, 8),
    tags: [
      'ReactJS | Native',
      'Node.js',
    ],
    link: 'https://github.com/Igorryan/gobarber',
    linkLabel: 'GitHub'
  },
  {
    title: 'Apps Clones',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2020, 6, 13),
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    link: 'https://github.com/Igorryan/apps-clones',
    linkLabel: 'GitHub'
  },
  {
    title: 'Exclusive E-commerce',
    uptitle: 'Freelancer',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2020, 4, 6),
    tags: [
      'UX | UI Design',
      'Web Design'
    ],
    link: 'https://www.figma.com/file/0vaggidrXGW9T5bvgfmuq5/Exclusive-Web-Plataform?node-id=0%3A1',
    linkLabel: 'Figma'
  },
]


const Projectsmin: React.FC = () => {

  const [projectSelected, setProjectSelected] = useState<boolean>(false);
  const [focus, setFocus] = useState<number>();
  const [noProjectsSelected, setNoProjectsSelected] = useState<boolean>(true);

  const projectsSortByDate = useMemo(() => {
    return projects.slice().sort((a, b) =>  b.date.getTime() - a.date.getTime())
  }, [])


  const handleSelectedProject = useCallback((id: number) => {
    setFocus(id);
    setProjectSelected(true);
    setNoProjectsSelected(false);
  }, []);

  const handleDeselectedProject = useCallback(() => {
    setProjectSelected(false);
    setNoProjectsSelected(true);
  }, []);

  const transformFormatDate = useCallback((date: Date): string => {
      const [, month, day, year] = date.toDateString().split(' ');

      return `${month} ${day}, ${year}`
  }, [])

  return (
    <Container>

      {projectsSortByDate.map(({ uptitle, title, local, date, tags, link,linkLabel }, i) => (
        <motion.div
          whileHover={window.innerWidth > 1100 ? { scale: 1.1 } : { scale: 1 }}
          key={i}
        >
          <Project onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(i)} style={{
            opacity: (focus === i && projectSelected) || noProjectsSelected ? 1 : 0.6,
            marginTop: i % 2 !== 0 && window.innerWidth > 1100 ? 25 : 0,
            marginBottom: i % 2 !== 0 && window.innerWidth > 1100 ? -16 : 0,
          }}>
            <UpTitle>{uptitle.toUpperCase()}</UpTitle>
            <Local>{local}</Local>
        <Data>{transformFormatDate(date)}</Data>
            <TagsContainer key={i}>{tags.map((t, id) => (
              <Tag key={id}>{t}</Tag>
            ))}</TagsContainer>
            <Title>
              {title}
            </Title>

            <Access>
                  <a href={link} rel="noopener noreferrer" target="_blank">
                    <span>{linkLabel}</span>
                    <img src={AccessIcon} alt="" />
                  </a>
            </Access>

          </Project>

        </motion.div>
      ))}

    </Container>
  );
}

export default Projectsmin;
