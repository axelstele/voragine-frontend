import React from 'react';
import {
  Drawer,
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { openDrawerSelector } from 'redux/selectors/global';
import { global } from 'redux/reducers/global';
import Link from 'next/link';
import { useRouter } from 'next/router';
import items from './items';

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const openDrawer = useSelector(openDrawerSelector, shallowEqual);

  const handleDrawerClose = () => {
    dispatch(global.hideDrawer());
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
      <div
        role="presentation"
        onClick={handleDrawerClose}
        onKeyDown={handleDrawerClose}
      />
      <List>
        {items.map((item) => (
          <Link href={item.pathname} key={item.id}>
            <ListItem
              button
              component="a"
              onClick={handleDrawerClose}
              selected={item.pathname === router.pathname}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
