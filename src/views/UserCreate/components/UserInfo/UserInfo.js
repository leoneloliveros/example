import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core';
import { RegisterForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const UserCreate = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
      <Card 
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Información" />
        <CardContent>
          <RegisterForm container spacing={1} className={classes.registerForm} />
        </CardContent>
      </Card>
  );
};

export default UserCreate;
