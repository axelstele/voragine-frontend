import React from 'react';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CategoryIcon from '@material-ui/icons/Category';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { CATEGORIES_PATHNAME, DASHBOARD_PATHNAME, PRODUCTS_PATHNAME } from 'utils/constants/pathnames';
import { CATEGORIES_TEXT, DASHBOARD_TEXT, PRODUCTS_TEXT } from 'utils/constants/global';

const items = [
  {
    id: 0, icon: <DashboardIcon />, pathname: DASHBOARD_PATHNAME, title: DASHBOARD_TEXT,
  },
  {
    id: 1, icon: <AccessibilityIcon />, pathname: PRODUCTS_PATHNAME, title: PRODUCTS_TEXT,
  },
  {
    id: 2, icon: <CategoryIcon />, pathname: CATEGORIES_PATHNAME, title: CATEGORIES_TEXT,
  },
];

export default items;
