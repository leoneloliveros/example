import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import axios from 'utils/axios';
import { useTranslation } from 'react-i18next';

import { Page } from 'components';
import { Header, Summary, Experience, Platforms, Logs } from './components';

const useStyles = makeStyles(theme => ({
  root: {
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

const UserManagementDetails = props => {
  const { match, history } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const { id, tab } = match.params;

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
    { value: 'summary', label: t('summary') },
    { value: 'experience', label: t('experience') },
    { value: 'platforms', label: t('platforms') },
    { value: 'logs', label: t('summary') }
  ];

  if (!tab) {
    return <Redirect to={`/management/users/${id}/summary`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title={t('userManagementDetails')}
    >
      <Header user={data} />
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
        {tab === 'summary' && <Summary user={data}/>}
        {tab === 'experience' && <Experience user={data && data.experience}/>}
        {tab === 'platforms' && <Platforms platforms={data && data.platforms}/>}
        {tab === 'logs' && <Logs />}
      </div>
    </Page>
  );
};

UserManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default UserManagementDetails;
