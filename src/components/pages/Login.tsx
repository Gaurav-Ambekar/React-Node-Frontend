import { Grid, Paper } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import banner from '../../assets/images/banner.svg';
import logo from '../../assets/images/logo.svg';
import { BASE_URL } from '../../config/settings';
import { RootState } from '../../rtk/RootState';
import Footer from '../layouts/Footer';
import Spinner from '../layouts/Spinner';
import LoginForm from '../Login/LoginForm';
const Login: React.FC = () => {
  const classes = useStyles();
  const { state } = useLocation<{ from: string } | undefined>();
  const { loading, isAuthenticated } = useSelector(
    (state: RootState) => state.loggedUser
  );
  if (localStorage.authorization && loading) {
    return <Spinner open={true} />;
  }
  if (isAuthenticated) {
    return state ? (
      <Redirect to={`${state.from}`} />
    ) : (
      <Redirect to={`${BASE_URL}/home`} />
    );
  }

  return (
    <Grid
      className={classes.loginContainer}
      component='main'
      container
      justify='center'
    >
      <Banner xs={false} sm={6} md={7} item />
      <Grid
        className={classes.formContainer}
        component={Paper}
        elevation={0}
        xs={12}
        sm={6}
        md={5}
        item
        square
      >
        <Paper>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <LoginForm />
        </Paper>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Login;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      height: '100vh',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      '& > div': {
        flex: '1',
        margin: theme.spacing(5),
        boxShadow: theme.neumorphism.flat,
        borderRadius: theme.spacing(1.5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
          flex: '0 1 auto',
          boxShadow: theme.neumorphism.flat,
          width: theme.spacing(10),
          height: theme.spacing(10),
          margin: theme.spacing(3, 0),
          padding: theme.spacing(1),
          borderRadius: '50%',
        },
      },
    },
  })
);

const Banner = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.default,
      backgroundImage: `url(${banner})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      backgroundPosition: 'left',
    },
  })
)(Grid);
