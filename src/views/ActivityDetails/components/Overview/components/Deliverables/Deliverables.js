import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Deliverables = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Typography variant="h4">Nota:</Typography>
        <Typography variant="body1">
        NIT: 800024834-1 NOMBRE: CLINICA OCCIDENTE DE OTORRINOLARINGOLOGIA OT PADRE: 13861633 OT HIJA: 15099486 FECHA 03-09-2020 08:00 CALLE 34 64A -19 EN LA CIUDAD DE MEDELLIN JAVERTH ARCILA 3103785775
        </Typography>
      </CardContent>
    </Card>
  );
};

Deliverables.propTypes = {
  className: PropTypes.string
};

export default Deliverables;
