import React, { useCallback, useState } from 'react';
import { motion } from "framer-motion";
import AccessIcon from "../../assets/icons/access.svg";

import Projets from '../../data/Projects'

import { Container, Project, Title, TitleAnimation, TagsContainer, Tag, UpTitle, Local, Data, Access } from './styles';

const Projectsmin: React.FC = () => {

  const [projectSelected, setProjectSelected] = useState<boolean>(false);
  const [focus, setFocus] = useState<number>();
  const [noProjectsSelected, setNoProjectsSelected] = useState<boolean>(true);
  const [projectOnFocus, setProjectOnFocus] = useState<number>(-1)

  // const projectsSortByDate = useMemo(() => {
  //   return Projets.slice().sort((a, b) => b.date.getTime() - a.date.getTime())
  // }, [])

  const handleSelectedProject = useCallback((id: number) => {
    setFocus(id);
    setProjectSelected(true);
    setNoProjectsSelected(false);
  }, []);

  const handleDeselectedProject = useCallback(() => {
    setProjectSelected(false);
    setNoProjectsSelected(true);
  }, []);

  const handleProjectOnFocus = useCallback((index: number) => {
    setProjectOnFocus(index)
    setTimeout(() => {
      const movieElement: any = document.getElementById(`vid-${index}`)
      console.log(movieElement)
      movieElement?.play();
    }, 1000)
  }, [])

  const transformFormatDate = useCallback((date: Date): string => {
    const [, month, day, year] = date.toDateString().split(' ');

    return `${month} ${day}, ${year}`
  }, [])

  return (
    <Container>

      {Projets.map(({ uptitle, title, local, date, tags, links, preview }, i) => (
        <motion.div
          onMouseEnter={() => handleProjectOnFocus(i)}
          onMouseLeave={() => setProjectOnFocus(-1)}
          whileHover={window.innerWidth > 1170 ? { scale: 1.1 } : { scale: 1 }}
          key={i}
        >

          <Project onMouseLeave={handleDeselectedProject} onMouseEnter={() => handleSelectedProject(i)} style={{
            opacity: window.innerWidth > 1170 ? ((focus === i && projectSelected) || noProjectsSelected ? 1 : 0.6) : 1,
            marginTop: i % 2 !== 0 && window.innerWidth > 1170 ? 25 : 0,
            marginBottom: i % 2 !== 0 && window.innerWidth > 1170 ? -16 : 0,
          }}>

            {projectOnFocus !== i ? (
              <>
                <UpTitle>{uptitle.toUpperCase()}</UpTitle>
                <Local>{local}</Local>
                <Data>{transformFormatDate(date)}</Data>
                <TagsContainer key={i}>{tags.map((t, id) => (
                  <Tag key={id}>{t}</Tag>
                ))}
                </TagsContainer>
                <Title>
                  {title}
                </Title>
              </>
            ) : (
              <>
                <TitleAnimation>
                  {title}
                </TitleAnimation>

                <video id={`vid-${i}`} style={{ marginTop: 30, marginBottom: 30 }} controls={false} autoPlay loop muted playsInline width="328">
                  <source src={preview}
                    type="video/mp4" />
                </video>
              </>
            )}

            <Access>
              {links && links.map(l => (
                <a href={l.url} rel="noopener noreferrer" target="_blank">
                  <span>{l.name}</span>
                  <img src={AccessIcon} alt="" />
                </a>
              ))}
            </Access>
          </Project>



        </motion.div>
      ))}

    </Container>
  );
}

export default Projectsmin;
