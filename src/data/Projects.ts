interface IProject {
  title: string;
  uptitle: string;
  local: string;
  date: Date;
  tags: string[];
  link: string;
  linkLabel: string
}


const Projects: IProject[] = [
  {
    title: 'Growth',
    uptitle: 'Freelancer',
    local: 'Florianópolis - Brazil',
    date: new Date(2021, 1, 17),
    tags: [
      'ReactJS',
    ],
    link: 'https://growth.sale',
    linkLabel: 'Website'
  },
  {
    title: 'Spider-Man',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2021, 1, 11),
    tags: [
      'HTML',
      'SASS',
    ],
    link: 'https://heuristic-saha-7147d4.netlify.app/',
    linkLabel: 'Website'
  },
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
    link: 'https://github.com/Igorryan/brodti',
    linkLabel: 'GitHub'
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
    link: 'https://store.mytiplife.com/',
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
    title: 'GoStack',
    uptitle: 'Study Projects',
    local: 'Belo Horizonte - Brazil',
    date: new Date(2020, 6, 9),
    tags: [
      'ReactJS | Native',
      'Node.js',
    ],
    link: 'https://github.com/Igorryan/rocketseat-gostack',
    linkLabel: 'GitHub'
  },
  {
    title: 'GoBarber',
    uptitle: 'Rocketseat',
    local: 'Belo Horizonte - Brazil',
    date: new Date(2020, 6, 8),
    tags: [
      'ReactJS | Native',
      'Node.js',
    ],
    link: 'https://github.com/Igorryan/gobarber',
    linkLabel: 'GitHub'
  },
  {
    title: 'Clones',
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
    ],
    link: 'https://www.figma.com/file/0vaggidrXGW9T5bvgfmuq5/Exclusive-Web-Plataform?node-id=0%3A1',
    linkLabel: 'Figma'
  },
]

export default Projects
