import { Box, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useQuery } from 'react-query';
import * as Yup from 'yup';
import { ROLE } from '../../config/settings';
import { login } from '../../rq/UserActions';
import { SelectFormField } from '../util/form/SelectFormField';
import { TextFormFieldIcon } from '../util/form/TextFormFieldIcon';
import { TextFormFieldPassword } from '../util/form/TextFormFieldPassword';
export interface ILoginForm {
  financial_year: string;
  user_name: string;
  user_password: string;
}
const initialValues: ILoginForm = {
  financial_year: '2020-2021',
  user_name: '',
  user_password: '',
};
const SignInSchema = Yup.object().shape({
  user_name: Yup.string().min(2, 'Too short').required('Required'),
  user_password: Yup.string().min(2).required('Required'),
});

const LoginForm: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component='section' className={classes.loginFormContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => {}}
        validationSchema={SignInSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <Field
              label='Financial Year'
              name='financial_year'
              options={ROLE}
              component={SelectFormField}
              placeholder='Select'
            />
            <Field
              label='Username'
              name='user_name'
              component={TextFormFieldIcon}
              fullWidth
              required
              autoFocus
              autoComplete='on'
              Icon={AccountCircle}
            />
            <TextFormFieldPassword name='user_password' label='Password' />

            <Button
              variant='contained'
              type='submit'
              disabled={!dirty || !isValid}
              fullWidth
            >
              <Typography variant='body2'>Login</Typography>
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginFormContainer: {
      flex: '1 0 auto',
      margin: theme.spacing(3, 0),
      width: '80%',
    },
  })
);
