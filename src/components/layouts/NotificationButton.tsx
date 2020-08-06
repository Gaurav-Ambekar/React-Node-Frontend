import { IconButton, Badge } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React from 'react';

const NotificationButton: React.FC = () => {
  const classes = useStyles();
  const [isClicked, setClicked] = React.useState<boolean>(false);
  const handleClick = () => {
    setClicked(!isClicked);
  };
  return (
    <IconButton
      className={clsx(
        classes.button,
        isClicked ? classes.buttonPressed : classes.buttonFlat
      )}
      size='small'
      onClick={handleClick}
      aria-label='show new notifications'
    >
      <Badge badgeContent={11} color='secondary'>
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationButton;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      margin: theme.spacing(0, 1),
      flex:'0 1 auto'
    },
    buttonFlat: {
      boxShadow: theme.neumorphism.flat,
    },
    buttonPressed: {
      boxShadow: theme.neumorphism.pressed,
    },
  })
);
