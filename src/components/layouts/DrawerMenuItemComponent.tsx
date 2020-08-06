import { NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';
import { ListItem } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export interface DrawerMenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
const DrawerMenuItemComponent: React.FC<DrawerMenuItemComponentProps> = ({
  children,
  link,
  onClick,
}) => {
  const classes = useStyles();
  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        children={children}
        onClick={onClick}
        className={classes.listItemContainer}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={classes.listItemContainer}
      children={children}
      onClick={onClick}
      to={`${link}`}
      component={React.forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink exact innerRef={ref} {...props} />
      ))}
    />
  );
};

export default DrawerMenuItemComponent;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemContainer: {
      // border: '1px solid #000',
      animation: '$slidesIn 500ms ease-in-out 1',
    },
    '@keyframes slidesIn': {
      '0%': {
        top: '-50px',
        opacity: 0,
      },
      '25%': {
        top: '-35px',
        opacity: 0.25,
      },
      '50%': {
        top: '-20px',
        opacity: 0.5,
      },
      '75%': {
        top: '-10px',
        opacity: 0.75,
      },
      '100%': {
        top: '0px',
        opacity: 1,
      },
    },
  })
);
