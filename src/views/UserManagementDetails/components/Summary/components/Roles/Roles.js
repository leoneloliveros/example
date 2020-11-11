import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { useTranslation } from 'react-i18next';
import { RolesAdd } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {},
  action: {
    margin: 0
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  table: {},
  cell: {
    padding: theme.spacing(1)
  }
}));
const Roles = props => {
  const { id, roles, className, ...rest } = props;
  const { t } = useTranslation();

  const classes = useStyles();

  const [openAdd, setOpenAdd] = useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader 
        title={t('roles')}
        action={
          <Button onClick={() => handleAddOpen()}>
            <IconButton aria-label="Add">
            <AddIcon />
            </IconButton>
          </Button>
        }
        classes={{ action: classes.action }}
        className={classes.action}
      />
      <RolesAdd
        id={id}
        onClose={handleAddClose}
        open={openAdd}
      />
      <Divider />
      <CardContent className={classes.content}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('area')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map(role => (
              <TableRow>
                <TableCell className={classes.cell}>
                  {t(role.role)}
                </TableCell>
                <TableCell className={classes.cell}>
                  {role.area}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.deleteButton}
                    startIcon={<DeleteIcon />}
                  >
                    {t('delete')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

Roles.propTypes = {
  className: PropTypes.string,
  roles: PropTypes.object.isRequired
};

export default Roles;
