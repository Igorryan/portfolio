import SignMovie from '../assets/videos/sign.mp4';
import BrodtiMovie from '../assets/videos/brodti.mp4';
import GrowthMovie from '../assets/videos/growth.mp4';
import MyTipLifeMovie from '../assets/videos/mytiplifestore.mp4';
import PucMinasMovie from '../assets/videos/pucminas.mp4';
import PicPayMovie from '../assets/videos/picpay.mp4';
import TwitterMovie from '../assets/videos/twitter.mp4';
import GoBarberMovie from '../assets/videos/gobarber.mp4';
import SpiderManMovie from '../assets/videos/spiderman.mp4';

interface ILinkProps {
  url: string;
  name: string;
}

interface IProject {
  title: string;
  uptitle: string;
  local: string;
  date: Date;
  preview?: string;
  tags: string[];
  links?: ILinkProps[];
}

const Projects: IProject[] = [
  {
    title: 'SignIn/Up Web',
    uptitle: 'Development',
    local: 'Sete Lagoas - Brazil',
    date: new Date(2021, 6, 28),
    preview: SignMovie,
    tags: [
      'React.JS'
    ],
    links: [
      {
        name: 'Website',
        url: 'https://signin-up-web-animation.netlify.app/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/signin-up-web-animation'
      }
    ],
  },
  {
    title: 'Growth',
    uptitle: 'Freelancer',
    local: 'Florianópolis - Brazil',
    date: new Date(2021, 1, 17),
    preview: GrowthMovie,
    tags: [
      'ReactJS',
    ],
    links: [
      {
        name: 'Website',
        url: 'https://growthspreview.netlify.app/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/growth'
      },
    ],
  },
  {
    title: 'BrodTi',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: new Date(2020, 7, 9),
    preview: BrodtiMovie,
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    links: [
      {
        name: 'Website',
        url: 'https://brodti.netlify.app/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/brodti'
      },
    ],
  },
    {
    title: 'MyTipLife',
    uptitle: 'Freelancer',
    local: 'San Francisco ─ California',
    date: new Date(2020, 11, 1),
    preview: MyTipLifeMovie,
    tags: [
      'Next.js',
    ],
    links: [
      {
        name: 'E-commerce',
        url: 'https://store.mytiplife.com/'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/mytiplife'
      },
    ],
  },
    {
    title: 'PUC Minas',
    uptitle: 'First Deploy',
    local: 'Belo Horizonte ─ Brazil',
    date: new Date(2019, 1, 11),
    preview: PucMinasMovie,
    tags: [
      'Javascript',
      'Firebase',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/escaninhos-pucminas'
      },
    ],
  },
    {
    title: 'PicPay Clone',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    preview: PicPayMovie,
    date: new Date(2020, 6, 13),
    tags: [
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
    title: 'Twitter Web Clone',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    preview: TwitterMovie,
    date: new Date(2020, 6, 19),
    tags: [
      'React.JS',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/apps-clones'
      },
    ],
  },

    {
    title: 'GoBarber',
    uptitle: 'Rocketseat',
    local: 'Belo Horizonte - Brazil',
    date: new Date(2020, 6, 8),
    preview: GoBarberMovie,
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
    title: 'Spiderman',
    uptitle: 'Study Project',
    local: 'Sete Lagoas - Brazil',
    preview: SpiderManMovie,
    date: new Date(2021, 1, 11),
    tags: [
      'SASS',
    ],
    links: [
      {
        name: 'Website',
        url: 'https://spidermanpreview.netlify.app'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Igorryan/frontweek'
      },
    ],
  },
    {
    title: 'API Net Promoter Score (NPS)',
    uptitle: 'XPE',
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
  // {
  //   title: 'Cozinha Fitness',
  //   uptitle: 'Freelancer',
  //   local: 'Sete Lagoas - Brazil',
  //   date: new Date(2021, 6, 28),
  //   tags: [
  //     'UI/UX'
  //   ],
  //   links: [
  //     {
  //       name: 'Figma',
  //       url: 'https://www.figma.com/file/SEB18kfCRyrWFzrZ1ZqEVG/Cozinha-Fitness?node-id=0%3A1'
  //     }
  //   ],
  // },
  // {
  //   title: 'Arena Trade',
  //   uptitle: 'Nick Builder',
  //   local: 'Belo Horizonte - Brazil',
  //   date: new Date(2021, 6, 22),
  //   tags: [
  //     'UI/UX',
  //     'Angular'
  //   ],
  //   links: [
  //     {
  //       name: 'Figma',
  //       url: 'https://www.figma.com/file/oQIT9vq54TBD35zUjwSVl2/Arena-Trade?node-id=0%3A1'
  //     }
  //   ],
  // },

  // {
  //   title: 'GiftCards Restaurants',
  //   uptitle: 'Freelancer',
  //   local: 'Sete Lagoas - Brazil',
  //   date: new Date(2020, 12, 18),
  //   tags: [
  //     'PHP',
  //     'JQuery'
  //   ],
  //   links: [
  //     {
  //       name: 'Website',
  //       url: 'https://www.mytiplife.com/marketplace'
  //     }
  //   ],
  // },
  // {
  //   title: 'BrodTi',
  //   uptitle: 'Freelancer',
  //   local: 'San Francisco ─ California',
  //   date: new Date(2020, 7, 9),
  //   tags: [
  //     'HTML',
  //     'CSS',
  //     'JavaScript',
  //   ],
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/Igorryan/brodti'
  //     },
  //   ],
  // },
  // {
  //   title: 'API Net Promoter Score (NPS)',
  //   uptitle: 'IGTI',
  //   local: 'Belo Horizonte ─ Brazil',
  //   date: new Date(2020, 3, 14),
  //   tags: [
  //     'Node.js',
  //     'Docker',
  //   ],
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/Igorryan/nps-igti'
  //     },
  //   ],
  // },


  // {
  //   title: 'GoStack',
  //   uptitle: 'Study Projects',
  //   local: 'Belo Horizonte - Brazil',
  //   date: new Date(2020, 6, 9),
  //   tags: [
  //     'ReactJS | Native',
  //     'Node.js',
  //   ],
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/Igorryan/rocketseat-gostack'
  //     },
  //   ],
  // },
  // {
  //   title: 'GoBarber',
  //   uptitle: 'Rocketseat',
  //   local: 'Belo Horizonte - Brazil',
  //   date: new Date(2020, 6, 8),
  //   tags: [
  //     'ReactJS | Native',
  //     'Node.js',
  //   ],
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/Igorryan/gobarber'
  //     },
  //   ],
  // },
  // {
  //   title: 'Clones',
  //   uptitle: 'Study Project',
  //   local: 'Sete Lagoas - Brazil',
  //   date: new Date(2020, 6, 13),
  //   tags: [
  //     'Sass',
  //     'React Native',
  //   ],
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/Igorryan/apps-clones'
  //     },
  //   ],
  // },
  // {
  //   title: 'Exclusive E-commerce',
  //   uptitle: 'Freelancer',
  //   local: 'Sete Lagoas - Brazil',
  //   date: new Date(2020, 4, 6),
  //   tags: [
  //     'UX/UX',
  //   ],
  //   links: [
  //     {
  //       name: 'Figma',
  //       url: 'https://www.figma.com/file/0vaggidrXGW9T5bvgfmuq5/Exclusive-Web-Plataform?node-id=0%3A1'
  //     },
  //   ],
  // },
]

export default Projects
