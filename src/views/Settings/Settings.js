import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import axios from 'utils/axios';

import { Page } from 'components';
import {
  Header,
  General,
  Experience,
  Platforms,
  Security
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Settings = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { tab } = match.params;
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios.get('/api/users/1').then(response => {
        if (mounted) {
          setData(response.data.data);
        }
      });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);


  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'experience', label: 'Experiencia' },
    { value: 'platforms', label: 'Plataformas' },
    { value: 'security', label: 'Seguridad' }
  ];

  if (!tab) {
    return <Redirect to="/settings/general" />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Header />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'general' && <General />}
        {tab === 'experience' && <Experience />}
        {tab === 'platforms' && <Platforms platforms={data && data.platforms}/>}
        {tab === 'security' && <Security />}
      </div>
    </Page>
  );
};

Settings.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Settings;