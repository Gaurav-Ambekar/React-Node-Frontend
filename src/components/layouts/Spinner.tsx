import React from 'react';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const Spinner: React.FC<{ open: boolean }> = ({ open }) => {
  const classes = useStyles();
  return (
    <Backdrop open={open} className={classes.backdrop}>
      <CircularProgress color='inherit' />
      <Typography variant='body1' color='textPrimary' component='div'>
        {' '}
        Please wait...
      </Typography>
    </Backdrop>
  );
};

export default Spinner;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      flexDirection: 'column',
    },
  })
);
