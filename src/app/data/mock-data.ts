import { NavLink } from './NavLink';
import { Plan } from './Plan';
import { PlanOption } from './PlanOptions';

export const NAV_LINKS: NavLink[] = [
  { index: 1, path: 'personal-info' },
  { index: 2, path: 'select-plan' },
  { index: 3, path: 'pick-addons' },
  { index: 4, path: 'finishing-up' },
  { index: 5, path: 'thank-you' },
];

export const PLANS: Plan[] = [
  {
    name: 'Arcade',
    priceMonth: '$9/mo',
    priceYear: '$90/yr',
    imgPath: 'assets/images/icon-arcade.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
  {
    name: 'Advanced',
    priceMonth: '$12/mo',
    priceYear: '$120/yr',
    imgPath: 'assets/images/icon-advanced.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
  {
    name: 'Pro',
    priceMonth: '$15/mo',
    priceYear: '$150/yr',
    imgPath: 'assets/images/icon-pro.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
];
