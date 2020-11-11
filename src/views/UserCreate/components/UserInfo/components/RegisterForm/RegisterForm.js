import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
} from '@material-ui/core';

import useRouter from 'utils/useRouter';

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  identification: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  phone: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  workPosition: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  }
}));

const RegisterForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    history.push('/');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError('firstName')}
          helperText={
            hasError('firstName') ? formState.errors.firstName[0] : null
          }
          label="First name"
          name="firstName"
          onChange={handleChange}
          value={formState.values.firstName || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('lastName')}
          helperText={
            hasError('lastName') ? formState.errors.lastName[0] : null
          }
          label="Last name"
          name="lastName"
          onChange={handleChange}
          value={formState.values.lastName || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.values.email || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('identification')}
          helperText={
            hasError('identification') ? formState.errors.identification[0] : null
          }
          label="Cedula"
          name="identification"
          type="number"
          onChange={handleChange}
          value={formState.values.identification || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('phone')}
          helperText={
            hasError('phone') ? formState.errors.phone[0] : null
          }
          label="Telefono"
          name="phone"
          type="number"
          onChange={handleChange}
          value={formState.values.phone || ''}
          variant="outlined"
        />
        
        <TextField
          error={hasError('workPosition')}
          fullWidth
          helperText={
            hasError('workPosition') ? formState.errors.workPosition[0] : null
          }
          label="Cargo"
          name="workPosition"
          onChange={handleChange}
          value={formState.values.workPosition || ''}
          variant="outlined"
        />
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  className: PropTypes.string
};

export default RegisterForm;
