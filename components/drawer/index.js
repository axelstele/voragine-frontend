import React from 'react';
import { Drawer } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { openDrawerSelector } from 'redux/selectors/global';
import { global } from 'redux/reducers/global';

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const openDrawer = useSelector(openDrawerSelector, shallowEqual);

  const handleDrawerClose = () => {
    dispatch(global.hideDrawer());
  };

  const handleListClick = () => {
    handleDrawerClose();
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
      <div
        role="presentation"
        onClick={handleListClick}
        onKeyDown={handleListClick}
      />
    </Drawer>

  );
};

export default CustomDrawer;
