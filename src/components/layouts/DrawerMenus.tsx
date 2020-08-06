import { List } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { MenuItems as DrawerMenuItems } from '../../config/Menus';
import DrawerMenuItem from './DrawerMenuItem';
const DrawerMenus: React.FC = () => {
  const classes = useStyles();
  return (
    <List component='nav' className={classes.menuContainer} disablePadding>
      {DrawerMenuItems.map((item, index) => (
        <DrawerMenuItem key={index} {...item} />
      ))}
    </List>
  );
};

export default DrawerMenus;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      // border: '1px solid #000',
      margin: theme.spacing(1, 0),
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 auto',
    },
  })
);
