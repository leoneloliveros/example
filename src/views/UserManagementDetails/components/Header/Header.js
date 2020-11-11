import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, colors } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Label } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, user, ...rest } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  if (!user) {
    return null;
  }

  const statusColors = {
    suspended: colors.orange[600],
    active: colors.green[600]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        {t('users')}
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>
          <Label
            color={statusColors[user.status]}
          >
            {t(user.status)}
          </Label>
        </div>
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

export default Header;
