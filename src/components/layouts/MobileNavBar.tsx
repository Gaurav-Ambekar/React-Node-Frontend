import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import React from 'react';
import DrawerContent from './DrawerContent';
import HamburgerMenu from './HamburgerMenu';
const MobileNavBar: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();
  const [isDrawerOpen, setDrawer] = React.useState<boolean>(false);
  const [activeClass, setActiveClass] = React.useState<string>('');

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawer(open);
    !isDrawerOpen
      ? setActiveClass(classes.hamburgerMenuActive)
      : setActiveClass('');
  };

  React.useEffect(() => {
    if (matches) {
      setDrawer(!matches);
      setActiveClass('');
    }
  }, [matches]);
  return (
    <>
      <Box component='div' className={classes.mobileSection}>
        <HamburgerMenu
          className={clsx(classes.neumorphism, activeClass)}
          toggleDrawer={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
        />
        <Typography
          variant='body1'
          style={{ flex: '1 0 auto', margin: '0 10px' }}
          align='center'
        >
          Name
        </Typography>
        <IconButton className={clsx(classes.neumorphism, classes.moreButton)}>
          <MoreIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        className={classes.drawerContainer}
        transitionDuration={200}
      >
        {/* content */}
        <DrawerContent
          className={clsx(classes.neumorphism, activeClass)}
          toggleDrawer={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
        />
      </Drawer>
    </>
  );
};

export default MobileNavBar;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileSection: {
      // border: '1px solid #000',
      display: 'flex',
      flex: '1 0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    hamburgerMenuActive: {
      boxShadow: theme.neumorphism.pressed,
      '& span.MuiIconButton-label': {
        '& span': {
          margin: '-1px',
        },
        '& span:nth-child(1)': {
          transform: 'rotate(-45deg)',
        },
        '& span:nth-child(2)': {
          transform: 'scale(0)',
        },
        '& span:nth-child(3)': {
          transform: 'rotate(45deg)',
        },
      },
    },
    neumorphism: {
      boxShadow: theme.neumorphism.flat,
    },
    moreButton: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
    },
    drawerContainer: {
      '& div.MuiBackdrop-root': {},
      '& div.MuiPaper-root': {
        animation: '$fadesIn 500ms 1 ease-in-out',
      },
      '& div.MuiDrawer-paper': {
        overflow: 'hidden',
      },
    },
    '@keyframes fadesIn': {
      '0%': {
        height: '0%',
        width: '17vw',
        opacity: 0,
      },
      '25%': {
        height: '25%',
        width: '34vw',
        opacity: 0.25,
      },
      '50%': {
        height: '50%',
        width: '51vw',
        opacity: 0.5,
      },
      '75%': {
        height: '75%',
        width: '68vw',
        opacity: 0.75,
      },
      '100%': {
        height: '100%',
        width: '85wv',
        opacity: 1,
      },
    },
  })
);
