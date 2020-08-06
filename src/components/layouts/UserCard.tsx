import {
  CardActionArea,
  Avatar,
  Badge,
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../rtk/RootState';
import { uploadImageAction } from '../../rtk/LoggedUser/loggedUserActions';

const UserCard: React.FC = () => {
  const classes = useStyles();
  const { user } = useSelector((state: RootState) => state.loggedUser);
  const dispatch = useDispatch();
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Image uploading...');

    const target = event.target as HTMLInputElement;
    const files = (target.files as FileList)[0];
    console.log('files', files);
    if (!files) return;
    const formData = new FormData();
    formData.append('file', files);
    dispatch(uploadImageAction(formData));
  };
  const CameraIcon = () => (
    <form>
      <input
        accept='image/*'
        className={classes.input}
        id='user_image'
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='user_image'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </form>
  );

  return (
    <Card className={classes.cardContainer} elevation={0}>
      <CardContent>
        <CardActionArea style={{ borderRadius: '50%' }}>
          <Badge
            overlap='circle'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            badgeContent={<CameraIcon />}
          >
            <Avatar
              alt={user?.user_fullname}
              src={user?.user_avatar}
              className={classes.large}
            />
          </Badge>
        </CardActionArea>
      </CardContent>
      <CardContent style={{ flex: '1', marginLeft: '10px' }}>
        <Typography variant='body1' component='p'>
          {user?.user_fullname}
        </Typography>
        <Typography variant='subtitle2' component='p'>
          {user?.user_role}
        </Typography>
        <Typography variant='caption' component='p'>
          {user?.user_email}-{user?.user_mobile}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      margin: theme.spacing(1, 0),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flex: '0 0 auto',
      [theme.breakpoints.down('sm')]: {
        animation: '$fadesIn 800ms ease-in 1s 1',
      },
      '& div.MuiCardContent-root': {
        padding: theme.spacing(0.5),
        '& p': {
          [theme.breakpoints.up('sm')]: {
            borderRadius: '10px',
            padding: '5px 15px',
          },
          fontSize: '0.8rem',
          borderRadius: '10px',
          padding: '3px 10px',
        },
      },
    },
    large: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.neumorphism.flat,
      color: '#bdbdbd',
      padding: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
      '& img': {
        borderRadius: '50%',
      },
    },
    input: {
      display: 'none',
    },
    '@keyframes fadesIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  })
);

const SmallIcon = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '25px',
      height: '25px',
      position: 'absolute',
      top: '10px',
      left: 0,
    },
  })
)(PhotoCamera);
