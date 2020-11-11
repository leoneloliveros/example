import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid, colors } from '@material-ui/core';

import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const Overview = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const data = {
    income: '854,355.00',
    expanses: '373,250.50',
    profit: '123,532.00',
    subscriptions: '26,000'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Total Asignadas
          </Typography>
          <div className={classes.valueContainer}>
            {/* <Typography variant="h3">${data.income}</Typography> */}
            <Typography variant="h3">100</Typography>
            <Label
              className={classes.label}
              color={colors.green[600]}
              variant="contained"
            >
              +25%
            </Label>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Total En proceso
          </Typography>
          <div className={classes.valueContainer}>
            {/* <Typography variant="h3">${data.expanses}</Typography> */}
            <Typography variant="h3">20</Typography>
            <Label
              className={classes.label}
              color={colors.green[600]}
              variant="contained"
            >
              +12%
            </Label>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Total Terminadas
          </Typography>
          <div className={classes.valueContainer}>
            {/* <Typography variant="h3">{data.profit}</Typography> */}
            <Typography variant="h3">100</Typography>
            <Label
              className={classes.label}
              color={colors.red[600]}
              variant="contained"
            >
              -20%
            </Label>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Total Vencidas 
            {/* OTHs que cumplieron con la fecha de entrega de servicio */}
          </Typography>
          <div className={classes.valueContainer}>
            {/* <Typography variant="h3">{data.subscriptions}</Typography> */}
            <Typography variant="h3">1000</Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
