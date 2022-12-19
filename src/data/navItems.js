import { generateKey } from 'utils/helpers';

const navItem = (title, link = '/') => ({ id: generateKey('navItem'), title, link })

const navItems = [
  navItem('Home', '/'),
  navItem('React.js'),
];

export default navItems;
