import { AddOn } from './AddOn';
import { NavLink } from './NavLink';
import { Plan } from './Plan';
import { PlanOption } from './PlanOptions';

export const NAV_LINKS: NavLink[] = [
  { index: 1, path: 'personal-info', label: 'Your Info' },
  { index: 2, path: 'select-plan', label: 'Select Plan' },
  { index: 3, path: 'pick-addons', label: 'Add-ons' },
  { index: 4, path: 'finishing-up', label: 'summary' },
  { index: 5, path: 'thank-you' },
];

export const PLANS: Plan[] = [
  {
    name: 'Arcade',
    priceMonthDesc: '$9/mo',
    priceMonth: 9,
    priceYearDesc: '$90/yr',
    priceYear: 90,
    imgPath: 'assets/images/icon-arcade.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
  {
    name: 'Advanced',
    priceMonthDesc: '$12/mo',
    priceMonth: 12,
    priceYearDesc: '$120/yr',
    priceYear: 120,
    imgPath: 'assets/images/icon-advanced.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
  {
    name: 'Pro',
    priceMonthDesc: '$15/mo',
    priceMonth: 15,
    priceYearDesc: '$150/yr',
    priceYear: 150,
    imgPath: 'assets/images/icon-pro.svg',
    monthsFree: '2 months free',
    isSelected: false,
  },
];
export const ADD_ONS: AddOn[] = [
  {
    name: 'Online service',
    priceMonthDesc: '+$1/mo',
    priceMonth: 1,
    priceYearDesc: '+$10/yr',
    priceYear: 10,
    description: 'Access to multiplayer games',
    isSelected: false,
  },
  {
    name: 'Larger storage',
    priceMonthDesc: '+$2/mo',
    priceMonth: 2,
    priceYearDesc: '+$20/yr',
    priceYear: 20,
    description: 'Extra 1TB of cloud save',
    isSelected: false,
  },
  {
    name: 'Customizable profile',
    priceMonthDesc: '+$2/mo',
    priceMonth: 2,
    priceYearDesc: '+$20/yr',
    priceYear: 20,
    description: 'Custom theme on your profile',
    isSelected: false,
  },
];
