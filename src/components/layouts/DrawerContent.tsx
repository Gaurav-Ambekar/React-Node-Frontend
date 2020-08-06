import { Box, Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import DrawerMenus from './DrawerMenus';
import { HamburgerMenuProps } from './HamburgerMenu';
import SignoutButton from './SignoutButton';
import UserCard from './UserCard';
const DrawerContent: React.FC<HamburgerMenuProps> = ({
  toggleDrawer,
  className,
  isDrawerOpen,
}) => {
  const classes = useStyles();
  return (
    <Container component='div' className={classes.drawerContentContainer}>
      <UserCard />
      <DrawerMenus />
      <Box component='footer'>
        <SignoutButton />
      </Box>
    </Container>
  );
};

export default DrawerContent;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '85vw',
      height: '100vh',
      overflowY: 'auto',
      '& footer': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
    },
    userSection: {
      display: 'flex',
    },
  })
);
