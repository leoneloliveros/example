import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  IconButton,
  colors
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AddIcon from '@material-ui/icons/Add';

import { Label } from 'components';
import { FormalStudyEdit, FormalStudyAdd } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  action: {
    margin: 0
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

const FormalStudies = props => {
  const { id, studies, className, ...rest } = props;
  const { t } = useTranslation();

  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [study, setStudy] = useState({});
  const [openAdd, setOpenAdd] = useState(false);

  const handleEditOpen = (study) => {
    setStudy({ ...study });
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const statusColors = {
    inProgress: colors.orange[600],
    finished: colors.green[600],
    suspended: colors.red[600]
  };

  return (
    <Card
    {...rest}
    className={clsx(classes.root, className)}
  >
    <CardHeader 
      title={t('formalStudies')}
      action={
        <a onClick={() => handleAddOpen()}>
          <IconButton aria-label="Add">
          <AddIcon />
          </IconButton>
        </a>
      }
      classes={{ action: classes.action }}
      className={classes.action}
    />
    <FormalStudyAdd
        id={id}
        onClose={handleAddClose}
        open={openAdd}
    />
    <Divider />
    <CardContent className={classes.content}>
      <PerfectScrollbar>
        <div className={classes.inner}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('institution')}</TableCell>
                <TableCell>{t('status')}</TableCell>
                <TableCell>{t('year')}</TableCell>
                <TableCell>{t('course')}</TableCell>
                <TableCell>{t('titleAwarded')}</TableCell>
                <TableCell>{t('actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studies.map(study => (
                <TableRow key={studies.id}>
                  <TableCell>{study.institution}</TableCell>
                  <TableCell>
                    <Label
                      color={statusColors[study.status]}
                      variant="outlined"
                    >
                      {t(study.status)}
                    </Label>
                  </TableCell>
                  <TableCell>{study.year}</TableCell>
                  <TableCell>{study.courseName}</TableCell>
                  <TableCell>{study.titleAwarded}</TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      onClick={() => handleEditOpen(study)}
                      size="small"
                      variant="outlined"
                    >
                      {t('edit')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <FormalStudyEdit
                study={study}
                onClose={handleEditClose}
                open={openEdit}
              />
            </TableBody>
          </Table>
        </div>
      </PerfectScrollbar>
    </CardContent>
  </Card>

  );
};

FormalStudies.propTypes = {
  className: PropTypes.string,
  studies: PropTypes.object.isRequired
};

export default FormalStudies;
