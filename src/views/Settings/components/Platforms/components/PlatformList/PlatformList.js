import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors
} from '@material-ui/core';

import { Label } from 'components';
import { PlatformEdit } from './components';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 40
  }
}));

const PlatformList = props => {
  const { className, platforms, ...rest } = props;

  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [platform, setPlatform] = useState({});

  const handleEditOpen = (platform) => {
    setPlatform({ ...platform });
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const statusColors = {
    blocked: colors.orange[600],
    active: colors.green[600],
    pending: colors.red[600],
    inProgress: colors.yellow[600]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardHeader
          title="Listado"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Usuario</TableCell>
                    <TableCell>Ultima Actualización</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {platforms.map(platform => (
                    <TableRow key={platform.id}>
                      <TableCell>{platform.name}</TableCell>
                      <TableCell>{platform.username}</TableCell>
                      <TableCell>
                        {moment(platform.date).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <Label
                          color={statusColors[platform.status]}
                          variant="outlined"
                        >
                          {platform.status}
                        </Label>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          onClick={() => handleEditOpen(platform)}
                          size="small"
                          variant="outlined"
                        >
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <PlatformEdit
                    platform={platform}
                    onClose={handleEditClose}
                    open={openEdit}
                  />
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

PlatformList.propTypes = {
  className: PropTypes.string
};

export default PlatformList;
