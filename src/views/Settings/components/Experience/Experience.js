import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';

import axios from 'utils/axios';
import { Page } from 'components';
import { Knowledge, TelecommunicationsExperience, FormalStudies } from './components';

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 25
  }
}));

const Experience = props => {
  const classes = useStyles();
  const { className, ...rest } = props;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchOrder = () => {
      axios.get('/api/orders/1').then(response => {
        if (mounted) {
          setOrder(response.data.order);
        }
      });
    };

    fetchOrder();

    return () => {
      mounted = false;
    };
  }, []);

  if (!order) {
    return null;
  }

  return (
    <Page
      {...rest}
      className={clsx(classes.root, className)}
      title="User Experience">
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          xl={3}
          xs={12}
        >
          <Knowledge knowledge={order} />
        </Grid>
        <Grid
          item
          md={8}
          xl={9}
          xs={12}
        >
          <Grid
            item
            xs={12}
          >
            <TelecommunicationsExperience studies={[]} />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.margin}
          >
            <FormalStudies id={''} studies={[]}/>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

Experience.propTypes = {
  className: PropTypes.string
};

export default Experience;
