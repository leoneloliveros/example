import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  AreaSelection,
  AboutProject,
  Preferences,
  ProjectCover,
  ProjectDetails
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  },
  aboutAuthor: {
    marginTop: theme.spacing(3)
  },
  aboutProject: {
    marginTop: theme.spacing(3)
  },
  projectCover: {
    marginTop: theme.spacing(3)
  },
  projectDetails: {
    marginTop: theme.spacing(3)
  },
  preferences: {
    marginTop: theme.spacing(3)
  },
  actions: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const UserCreate = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Crear usuario"
    >
      <Header />
      <Grid
        container
        spacing={3}
      >
      <Grid
        item
        md={8}
        xl={3}
        xs={12}
      >
        <AboutProject className={classes.aboutProject} />
      </Grid>
      <Grid
        item
        md={4}
        xl={3}
        xs={12}
      >
        <AreaSelection className={classes.aboutAuthor} />
        <div className={classes.actions}>
        <Button
          color="primary"
          variant="contained"
        >
          Crear Usuario
        </Button>
      </div>
      </Grid>
    </Grid>
    </Page>
  );
};

export default UserCreate;
