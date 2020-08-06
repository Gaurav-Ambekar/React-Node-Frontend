import { Box, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Footer from '../layouts/Footer';
import NavigationBar from '../layouts/NavigationBar';
interface Props {
  children: React.ReactElement;
}
const ScrollTop = ({ children }: Props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role='presentation'
        className={classes.scrollButton}
      >
        {children}
      </div>
    </Zoom>
  );
};
const MainLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <NavigationBar />
      <Box
        component='div'
        className={classes.contentContainer}
        id='back-to-top-anchor'
      >
        {children}
        <ScrollTop>
          <Fab size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      backgroundColor: theme.palette.background.default,
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(8),
    },
    scrollButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
