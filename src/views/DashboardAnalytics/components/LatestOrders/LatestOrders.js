import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  colors
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import axios from 'utils/axios';
import { Label, GenericMoreButton } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  progressContainer: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const labelColors = {
  complete: colors.green[600],
  pending: colors.orange[600],
  rejected: colors.red[600]
};

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      axios.get('/api/dashboard/latest-orders').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Actividades a Realizar / To Do List / Por perfil "
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className={classes.inner}>
            {orders && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >
                          OTH ID
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Responsable</TableCell>
                    <TableCell>Rol</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell>{order.ref}</TableCell>
                      
                      <TableCell className={classes.totalCell}>
                        {order.currency} {order.value}
                      </TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>
                        <Label
                          color={labelColors[order.status]}
                          variant="outlined"
                        >
                          {order.status}
                        </Label>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to={'management/orders/1'}
                          variant="outlined"
                        >
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="management/orders"
          variant="text"
        >
          Ver todos
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
