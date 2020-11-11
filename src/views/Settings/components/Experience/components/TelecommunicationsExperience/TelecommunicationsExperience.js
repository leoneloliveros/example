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
  colors
} from '@material-ui/core';

import { Label } from 'components';
import { TelecommunicationsExperienceEdit } from './components';

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

const TelecommunicationsExperience = props => {
  const { studies, className, ...rest } = props;

  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [study, setStudy] = useState({});

  const handleEditOpen = (study) => {
    setStudy({ ...study });
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const statusColors = {
    Suspended: colors.orange[600],
    Active: colors.green[600],
    rejected: colors.red[600]
  };

  return (
    <Card
    {...rest}
    className={clsx(classes.root, className)}
  >
    <CardHeader title="Trabajo en Telecomunicaciones" />
    <Divider />
    <CardContent className={classes.content}>
      <PerfectScrollbar>
        <div className={classes.inner}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Empresa</TableCell>
                <TableCell>Cargo</TableCell>
                <TableCell>Inicio</TableCell>
                <TableCell>Fin</TableCell>
                <TableCell>Duración (Años)</TableCell>
                <TableCell>Acciones</TableCell>
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
                      {study.status}
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
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TelecommunicationsExperienceEdit
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

TelecommunicationsExperience.propTypes = {
  className: PropTypes.string,
  studies: PropTypes.object.isRequired
};

export default TelecommunicationsExperience;
