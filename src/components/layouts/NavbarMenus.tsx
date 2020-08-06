import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { MenuItems } from '../../config/Menus';
import NavbarMenuItem from './NavbarMenuItem';

const NavbarMenus: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.menusContainer}>
      {MenuItems.map((item, index) => (
        <NavbarMenuItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default NavbarMenus;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menusContainer: {
      // border: '1px solid #000',
      display: 'flex',
      flexDirection: 'row',
      flex: '1 0 auto',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: theme.spacing(0, 1),
    },
  })
);
