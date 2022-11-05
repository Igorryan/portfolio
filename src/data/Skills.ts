import Typescript from '../assets/icons/typescript.svg';
import ReactJS from '../assets/icons/reactjs.svg';
import Next from '../assets/icons/nextjs.svg';
import ReactNative from '../assets/icons/react-native.svg';
import Node from '../assets/icons/node.svg';
// import GraphQL from '../assets/icons/graphql.svg';
import JQuery from '../assets/icons/jquery.svg';
import MongoDB from '../assets/icons/mongodb.svg';
import PostgreSQL from '../assets/icons/postgresqlv2.svg';
import Docker from '../assets/icons/docker.svg';
import CorelDraw from '../assets/icons/coreldrawv2.svg';
import Photoshop from '../assets/icons/photoshopv2.svg';
import Sass from '../assets/icons/sass.svg';

import Figma from '../assets/icons/figma.svg';

interface ISkills {
  name: string;
  icon: string;
  category: 'development' | 'design'
}

const Skills: ISkills[] = [
  {
    name: 'TypeScript',
    icon: Typescript,
    category: 'development'
  },
  {
    name: 'ReactJS',
    icon: ReactJS,
    category: 'development'
  },
  {
    name: 'Next.js',
    icon: Next,
    category: 'development'
  },
  {
    name: 'React Native',
    icon: ReactNative,
    category: 'development'
  },
  {
    name: 'jQuery',
    icon: JQuery,
    category: 'development'
  },
  {
    name: 'Sass',
    icon: Sass,
    category: 'development'
  },
  {
    name: 'Node.js',
    icon: Node,
    category: 'development'
  },
  {
    name: 'MongoDB',
    icon: MongoDB,
    category: 'development'
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    category: 'development'
  },
  {
    name: 'Docker',
    icon: Docker,
    category: 'development'
  },
  {
    name: 'Figma',
    icon: Figma,
    category: 'design'
  },
  {
    name: 'Corel Draw',
    icon: CorelDraw,
    category: 'design'
  },
  {
    name: 'Photoshop',
    icon: Photoshop,
    category: 'design'
  },
]

export default Skills
