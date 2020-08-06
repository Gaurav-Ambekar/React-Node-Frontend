import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../config/settings';
// React runtime PropTypes
export const NavbarMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

// TypeScript compile-time props type, infered from propTypes
type NavbarMenuItemPropTypes = PropTypes.InferProps<
  typeof NavbarMenuItemPropTypes
>;
type NavbarMenuItemPropsWithoutItems = Omit<NavbarMenuItemPropTypes, 'items'>;

// Improve child items declaration
export type NavbarMenuItemProps = NavbarMenuItemPropsWithoutItems & {
  items?: NavbarMenuItemProps[];
};

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  name,
  link,
  Icon,
  items = [],
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const prevOpen = React.useRef<boolean>(open); //return focus to the button when we transitioned from !open -> open
  const isExpandable = items && items.length > 0;
  const activeParentButton = isExpandable
    ? items.find((item) => `${BASE_URL}${item.link}` === pathname)
    : pathname === `${BASE_URL}${link}`;
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
  const handleListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      {isExpandable ? (
        <>
          <Button
            className={clsx(
              classes.button,
              activeParentButton || open
                ? classes.buttonPressed
                : classes.buttonFlat
            )}
            endIcon={<ArrowDropDownIcon />}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
          >
            <Typography variant='body2' component='span'>
              {name}
            </Typography>
          </Button>
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
            {({ TransitionProps, placement }) => (
              <Grow {...TransitionProps}>
                <Paper className={classes.menuListContainer}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='menu-list-grow'
                      onKeyDown={handleListKeyDown}
                    >
                      {items.map((item, index) => (
                        <MenuItem
                          component={Link}
                          to={`${BASE_URL}${item.link}`}
                          selected={pathname === `${BASE_URL}${item.link}`}
                          key={index}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </>
      ) : (
        <Button
          component={Link}
          to={`${BASE_URL}${link}`}
          className={clsx(
            classes.button,
            activeParentButton ? classes.buttonPressed : classes.buttonFlat
          )}
        >
          <Typography variant='body2' component='span'>
            {name}
          </Typography>
        </Button>
      )}
    </>
  );
};

export default NavbarMenuItem;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0, 1),
      minHeight: '50px',
    },
    buttonFlat: {
      boxShadow: theme.neumorphism.flat,
    },
    buttonPressed: {
      boxShadow: theme.neumorphism.pressed,
    },
    menuListContainer: {
      // border: '1px solid #000',
      marginTop: theme.spacing(2),
      width: '250px',
      boxShadow: theme.neumorphism.flat,
    },
  })
);
