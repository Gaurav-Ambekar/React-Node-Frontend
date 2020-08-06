import { IconButton, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import React from 'react';
import Spinner from './Spinner';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../config/settings';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../rtk/LoggedUser/loggedUserActions';

const SignoutButton: React.FC = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [isClicked, setClicked] = React.useState<boolean>(false);
  const handleClick = () => {
    setClicked(!isClicked);
    dispatch(logoutAction());
  };
  return (
    <>
      <IconButton
        className={clsx(
          classes.button,
          isClicked ? classes.buttonPressed : classes.buttonFlat
        )}
        size='small'
        onClick={handleClick}
      >
        <Tooltip title='Signout' aria-label='signout' placement='top' arrow>
          <ExitToAppIcon />
        </Tooltip>
      </IconButton>
      <Spinner open={isClicked} />
    </>
  );
};

export default SignoutButton;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      margin: theme.spacing(0, 1),
      flex: '0 1 auto',
    },
    buttonFlat: {
      boxShadow: theme.neumorphism.flat,
    },
    buttonPressed: {
      boxShadow: theme.neumorphism.pressed,
    },
  })
);
