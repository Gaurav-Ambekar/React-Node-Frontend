import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footerContainer} component='footer'>
      <Typography variant='body2' color='textSecondary' align='left'>
        {'Copyright © '}
        {new Date().getFullYear() - 1}
        {' - '}
        {new Date().getFullYear()}
        {'. All rights reserved.'}
      </Typography>
      <Typography variant='body2' color='textSecondary' align='right'>
        {'Powered by Interlink Consultant'}
      </Typography>
    </Container>
  );
};

export default Footer;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      '& p:nth-child(2)': {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
  })
);
