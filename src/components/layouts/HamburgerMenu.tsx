import clsx from 'clsx';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export interface HamburgerMenuProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  className?: string;
  isDrawerOpen: boolean;
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  toggleDrawer,
  className,
  isDrawerOpen,
}) => {
  const classes = useStyles();
  return (
    <IconButton
      color='inherit'
      className={clsx(className, classes.hamburgerMenu)}
      onClick={toggleDrawer(!isDrawerOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </IconButton>
  );
};

export default HamburgerMenu;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hamburgerMenu: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      transition: 'box-shadow 0.6s cubic-bezier(.79, .21, .06, .81)',
      '& span.MuiIconButton-label': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& span': {
          backgroundColor: 'rgba(0,0,0,0.54)',
          height: '2px',
          width: '20px',
          margin: '3px 0px 3px 0px',
          boxShadow: '0px 0px 10px 0px rgba(240, 128, 128, 0.3)',
          transition:
            'margin 0.4s cubic-bezier(.79, .21, .06, .81), transform 0.4s cubic-bezier(.79, .21, .06, .81)',
        },
        '& span:nth-child(2)': {
          transformOrigin: '50% 50%',
        },
      },
    },
  })
);
