import {
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React from 'react';
import DrawerMenuItemComponent from './DrawerMenuItemComponent';
// React runtime PropTypes
export const DrawerMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

// TypeScript compile-time props type, infered from propTypes
type DrawerMenuItemPropTypes = PropTypes.InferProps<
  typeof DrawerMenuItemPropTypes
>;

type DrawerMenuItemPropsWithoutItems = Omit<DrawerMenuItemPropTypes, 'items'>;

// Improve child items declaration
export type DrawerMenuItemProps = DrawerMenuItemPropsWithoutItems & {
  items?: DrawerMenuItemProps[];
};

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  name,
  link,
  Icon,
  items = [],
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const isExpandable = items && items.length > 0;
  const handleClick = () => {
    setOpen(!open);
  };
  const menuItemParent = (
    <DrawerMenuItemComponent link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.flatMorphic}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && (
        <IconButton className={classes.flatMorphic} disableRipple>
          <IconExpandMore />
        </IconButton>
      )}
      {isExpandable && open && (
        <IconButton className={classes.pressedMorphic} disableRipple>
          <IconExpandLess />
        </IconButton>
      )}
    </DrawerMenuItemComponent>
  );
  const menuItemChildren = isExpandable ? (
    <Collapse
      in={open}
      timeout='auto'
      unmountOnExit
      style={{ margin: '0 20px' }}
    >
      <List component='div' disablePadding>
        {items.map((item, index) => (
          <DrawerMenuItem key={index} {...item} />
        ))}
      </List>
    </Collapse>
  ) : null;
  return (
    <>
      {menuItemParent}
      {menuItemChildren}
    </>
  );
};

export default DrawerMenuItem;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flatMorphic: {
      minWidth: '40px',
      minHeight: '40px',
      borderRadius: '10px',
      boxShadow: theme.neumorphism.flat,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
    },
    pressedMorphic: {
      minWidth: '40px',
      minHeight: '40px',
      borderRadius: '10px',
      boxShadow: theme.neumorphism.pressed,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
    },
  })
);
