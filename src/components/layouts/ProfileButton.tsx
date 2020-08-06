import {
  ClickAwayListener,
  Container,
  Fade,
  IconButton,
  Paper,
  Popper,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import React from 'react';
import UserCard from './UserCard';

const ProfileButton: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const prevOpen = React.useRef<boolean>(open); //return focus to the button when we transitioned from !open -> open
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <IconButton
        className={clsx(
          classes.button,
          open ? classes.buttonPressed : classes.buttonFlat
        )}
        size='small'
        onClick={handleToggle}
        aria-label='show user profile'
        aria-controls={open ? 'user-profile-fade' : undefined}
        aria-haspopup='true'
        ref={anchorRef}
      >
        <AccountCircle />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-end'
        transition
        disablePortal
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverFlow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },
          arrow: {
            enabled: true,
            element: '[x-arrow]',
          },
        }}
      >
        {({ placement, TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper className={classes.userProfileContainer}>
              <ClickAwayListener onClickAway={handleClose}>
                <Container>
                  <UserCard />
                </Container>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default ProfileButton;
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
    userProfileContainer: {
      // border: '1px solid #000',
      marginTop: theme.spacing(3),
      boxShadow: theme.neumorphism.flat,
      padding: theme.spacing(5),
    },
  })
);
