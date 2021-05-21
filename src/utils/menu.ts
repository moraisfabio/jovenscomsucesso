import { FiHome, FiTool, FiUser } from 'react-icons/fi';
import { MdDashboard, MdQueuePlayNext } from 'react-icons/md';
import { IconBaseProps } from 'react-icons';

interface Menu {
  id: number;
  name: string;
  labelPt: string;
  labelEng: string;
  icon: React.ComponentType<IconBaseProps> | null;
  component: string | null;
  path: string | null;
  parent: number | null;
}

const menu: Menu[] = [
  {
    id: 1,
    name: 'home',
    labelPt: 'Inicio',
    labelEng: 'Home',
    icon: FiHome,
    component: 'Home',
    path: '/',
    parent: null,
  },
  {
    id: 2,
    name: 'usuarios',
    labelPt: 'Usuários',
    labelEng: 'Users',
    icon: FiUser,
    component: 'User',
    path: '/usuarios',
    parent: null,
  },
];

export default menu;
