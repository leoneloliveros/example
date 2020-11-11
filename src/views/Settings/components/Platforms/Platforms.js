import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid
} from '@material-ui/core';

import { PlatformList } from './components';


const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  }
}));

const Platforms = props => {
  const { className, platforms, ...rest } = props;

  const classes = useStyles();

  if (!platforms) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
        <PlatformList platforms={platforms.slice(0, platforms.length/2)}/>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
        <PlatformList platforms={platforms.slice(platforms.length/2 + 1, platforms.length)}/>
      </Grid>
    </Grid>
  );
};

Platforms.propTypes = {
  className: PropTypes.string,
  platforms: PropTypes.object.isRequired
};

export default Platforms;
