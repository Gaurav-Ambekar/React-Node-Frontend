import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { FieldAttributes, useField } from 'formik';
import React, { useState } from 'react';

type MyTextFieldProps = {
  label: string;
  required?: boolean;
} & FieldAttributes<{}>;
export const TextFormFieldPassword: React.FC<MyTextFieldProps> = ({
  label,
  required = false,
  ...props
}) => {
  const classes = useStyles();
  const [field, meta] = useField<{}>(props);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return (
    <FormControl
      className={classes.root}
      error={!!errorText}
      required={required}
      fullWidth
      variant='outlined'
    >
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        {...field}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1, 0),
      '& label.MuiInputLabel-outlined': {
        backgroundColor: theme.palette.background.default,
      },
      '& .MuiFormHelperText-root': {
        height: theme.spacing(2.5),
        margin: theme.spacing(0),
      },
    },
  })
);
