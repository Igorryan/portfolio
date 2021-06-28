interface ILinkProps {
  url: string;
  name: string;
}

interface IProject {
  title: string;
  uptitle: string;
  local: string;
  date: Date;
  tags: string[];
  links?: ILinkProps[];
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/growth'
      },
      {
        name: 'Website',
        url: 'https://growth.sale'
      }
    ],
  },
  {
    title: 'Cozinha Fitness',
    uptitle: 'Freelancer',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2021, 6, 28),
    tags: [
      'UI/UX'
    ],
    links: [
      {
        name: 'Figma',
        url: 'https://www.figma.com/file/SEB18kfCRyrWFzrZ1ZqEVG/Cozinha-Fitness?node-id=0%3A1'
      }
    ],
  },
  {
    title: 'Arena Trade',
    uptitle: 'Nick Builder',
    local: 'Belo Horizonte - Brazil',
    date: new Date(2021, 6, 22),
    tags: [
      'UI/UX',
      'Angular'
    ],
    links: [
      {
        name: 'Figma',
        url: 'https://www.figma.com/file/oQIT9vq54TBD35zUjwSVl2/Arena-Trade?node-id=0%3A1'
      }
    ],
  },
  {
    title: 'Frontweek',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2021, 1, 11),
    tags: [
      'SASS',
      'Web'
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/frontweek'
      },
      {
        name: 'Website',
        url: 'https://heuristic-saha-7147d4.netlify.app/'
      }
    ],
  },
  {
    title: 'GiftCards Restaurants',
    uptitle: 'Freelancer',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2020, 12, 18),
    tags: [
      'PHP',
      'JQuery'
    ],
    links: [
      {
        name: 'Website',
        url: 'https://www.mytiplife.com/marketplace'
      }
    ],
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/brodti'
      },
    ],
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/nps-igti'
      },
    ],
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/escaninhos-pucminas'
      },
      {
        name: 'Video',
        url: 'https://www.youtube.com/watch?v=omsPSC1DbAI&feature=youtu.be&ab_channel=IgorRyan'
      }
    ],
  },
  {
    title: 'MyTipLife E-commerce',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: new Date(2020, 11, 1),
    tags: [
      'Next.js',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/mytiplife'
      },
      {
        name: 'E-commerce',
        url: 'https://store.mytiplife.com/'
      }
    ],
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/rocketseat-gostack'
      },
    ],
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
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/gobarber'
      },
    ],
  },
  {
    title: 'Clones',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2020, 6, 13),
    tags: [
      'Sass',
      'React Native',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/apps-clones'
      },
    ],
  },
  {
    title: 'Exclusive E-commerce',
    uptitle: 'Freelancer',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2020, 4, 6),
    tags: [
      'UX/UX',
    ],
    links: [
      {
        name: 'Figma',
        url: 'https://www.figma.com/file/0vaggidrXGW9T5bvgfmuq5/Exclusive-Web-Plataform?node-id=0%3A1'
      },
    ],
  },
]

export default Projects
