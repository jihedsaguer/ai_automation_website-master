export interface NavItem {
  path: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/team', label: 'Our Team' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/partners', label: 'Partners' },
  { path: '/training', label: 'Training & Certification' },
  { path: '/contact', label: 'Contact' },
];

