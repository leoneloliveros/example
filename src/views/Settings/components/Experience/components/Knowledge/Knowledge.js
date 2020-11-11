import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { KnowledgeEdit } from './components';

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

const KnowledgeInfo = props => {
  const { knowledge, className, ...rest } = props;

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
      <CardHeader title="Conocimientos" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>IP</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong>{knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? moment(knowledge.ipDate).format('DD/MM/YYYY') : 'Sin Data'}{}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Telefonía</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tx</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SDWAN</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SR/RX</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Procesos</TableCell>
              <TableCell>
                <div><strong>Nivel:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Certificado CLARO:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
                <div><strong>Examen:</strong> {knowledge.ipLevel ? knowledge.ipLevel : 'Sin Data'}</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={() => handleEditOpen()}>
          <EditIcon className={classes.buttonIcon} />
          Editar
        </Button>
      </CardActions>
      <KnowledgeEdit
        knowledge={knowledge}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

KnowledgeInfo.propTypes = {
  className: PropTypes.string,
  knowledge: PropTypes.object.isRequired
};

export default KnowledgeInfo;
