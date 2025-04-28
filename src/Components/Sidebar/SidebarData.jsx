import { BiAnalyse } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

const routes = [
  {
    path: '/',
    name: 'Manage Work Permit',
    icon: <FaUser />,
  },

  {
    path: '/manage-checklist',
    name: 'Manage Form Definition',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-workflow',
    name: 'Manage Work Flow',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-section',
    name: 'Manage Section',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-section-sequence',
    name: 'Manage Section sequence',
    icon: <BiAnalyse />,
  },
  {
    path: '/emailmanagement',
    name: 'Email Management',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-plot-location',
    name: 'Manage Plot Location',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-process',
    name: 'Manage Process',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-tab',
    name: 'Manage Tabs',
    icon: <BiAnalyse />,
  },
  {
    path: '/manage-purging-data',
    name: 'Manage Archival/Purging',
    icon: <BiAnalyse />,
  },
];

export default routes;
