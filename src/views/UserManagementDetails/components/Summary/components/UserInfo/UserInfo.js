import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { useTranslation } from 'react-i18next';

import { Label } from 'components';
import { UserEdit } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const UserInfo = props => {
  const { info, className, ...rest } = props;
  const { t } = useTranslation();


  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title={t('info')} />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{t('email')}</TableCell>
              <TableCell>
                {info.email}
                <div>
                  <Label
                    color={
                      info.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {info.verified
                      ? t('verified.email')
                      : t('notVerified.email')}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>{t('workPosition')}</TableCell>
              <TableCell>{info.workPosition}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('identification')}</TableCell>
              <TableCell>{info.identification}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>{t('phone')}</TableCell>
              <TableCell>{info.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('group')}(s)</TableCell>
              <TableCell>{info.groups.toString().replaceAll(",", ", ")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          {t('edit')}
        </Button>
        <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          {t('resetPassword')}
        </Button>
        <Button>
          <PersonIcon className={classes.buttonIcon} />
          {t('signInAs')} {info.firstName}
        </Button>
      </CardActions>
      <UserEdit
        info={info}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string,
  info: PropTypes.object.isRequired
};

export default UserInfo;
