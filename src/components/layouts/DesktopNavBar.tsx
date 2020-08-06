import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SignoutButton from './SignoutButton';
import NavbarMenus from './NavbarMenus';
import NotificationButton from './NotificationButton';
import ProfileButton from './ProfileButton';
const DesktopNavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.desktopSection}>
      <Typography variant='body1' align='center' className={classes.title}>
        Name
      </Typography>
      <NavbarMenus />
      <ProfileButton />
      <NotificationButton />
      <SignoutButton />
    </Box>
  );
};

export default DesktopNavBar;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopSection: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flex: '1 0 auto',
      },
    },
    title: {
      flex: '0 0 100px',
    },
  })
);
