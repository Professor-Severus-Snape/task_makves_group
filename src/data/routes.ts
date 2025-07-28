import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IRoutes {
  title: string;
  icon: IconProp;
  path: string;
}

export const routes: IRoutes[] = [
  { title: 'Home', icon: ['fas', 'house'], path: '/' },
  { title: 'Sales', icon: ['fas', 'chart-line'], path: '/sales' },
  { title: 'Costs', icon: ['fas', 'chart-column'], path: '/costs' },
  { title: 'Payments', icon: ['fas', 'wallet'], path: '/payments' },
  { title: 'Finances', icon: ['fas', 'chart-pie'], path: '/finances' },
  { title: 'Messages', icon: ['fas', 'envelope'], path: '/messages' },
];

export const bottomRoutes: IRoutes[] = [
  { title: 'Settings', icon: ['fas', 'sliders'], path: '/settings' },
  { title: 'Support', icon: ['fas', 'phone-volume'], path: '/support' },
];
