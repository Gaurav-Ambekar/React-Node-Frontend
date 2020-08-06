import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FieldProps, getIn } from 'formik';
import React from 'react';

export const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string | number }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const classes = useStyles();
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl
      fullWidth
      error={!!errorText}
      className={classes.root}
      variant='outlined'
    >
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <Select fullWidth {...field} {...props}>
        {options.map((op) => (
          <MenuItem key={op.value} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </Select>
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
      '& p.MuiFormHelperText-root': {
        height: theme.spacing(2),
        margin: theme.spacing(0),
      },
    },
  })
);
