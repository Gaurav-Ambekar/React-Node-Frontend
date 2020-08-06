import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SvgIconProps,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FieldProps, getIn } from 'formik';
import React, { ComponentType } from 'react';

type TextFormFieldIconProps = {
  label: string;
  Icon?: ComponentType<SvgIconProps>;
  autoFocus?: boolean;
  autoComplete?: string;
} & FieldProps;
export const TextFormFieldIcon: React.FC<TextFormFieldIconProps> = ({
  field,
  form,
  label,
  Icon,
  autoFocus = false,
  autoComplete = 'off',
  ...props
}) => {
  const classes = useStyles();
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl
      className={classes.root}
      error={!!errorText}
      {...props}
      variant='outlined'
    >
      <InputLabel htmlFor={label}>{label}</InputLabel>
      {Icon ? (
        <OutlinedInput
          {...field}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          endAdornment={
            <InputAdornment position='end'>
              <Icon color='primary' />
            </InputAdornment>
          }
        />
      ) : (
        <OutlinedInput
          {...field}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
        />
      )}
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
      '& div.MuiInputAdornment-root': {
        padding: '12px',
      },
      '& p.MuiFormHelperText-root': {
        height: theme.spacing(2),
        margin: theme.spacing(0),
      },
    },
  })
);
