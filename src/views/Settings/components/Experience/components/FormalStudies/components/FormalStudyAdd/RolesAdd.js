import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Button,
  colors
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';


let running = true;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const PlatformEdit = props => {
  const { open, onClose, platform, className, ...rest } = props;

  const classes = useStyles();
 
  const [formState, setFormState] = useState({});
  const [calendarTrigger, setCalendarTrigger] = useState(null);

  if (!open) {
    !running && (running = true)
    return null;
  } else {
    running && setFormState({ ...platform })
    running = false;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };

  const handleCalendarOpen = trigger => {
    setCalendarTrigger(trigger);
  };

  const handleCalendarChange = () => {};

  const handleCalendarAccept = date => {
    setFormState(formState => ({
      ...formState,
      [calendarTrigger]: date
    }));
  };

  const handleCalendarClose = () => {
    setCalendarTrigger(false);
  };

  const calendarOpen = Boolean(calendarTrigger);
  const calendarMinDate =
    calendarTrigger === 'startDate'
      ? moment()
      : moment(formState.startDate).add(1, 'day');
  const calendarValue = formState[calendarTrigger];
  const statusOptions = ['Active', 'Pending', 'En curso solicitud', 'Bloqueado'];

 

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
            >
              Agregar Role
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Usuario"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.username}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Contraseña"
                  name="password"
                  onChange={handleFieldChange}
                  value={formState.password}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                    fullWidth
                    label="Estado"
                    name="status"
                    onChange={event =>
                      handleFieldChange(
                        event,
                        'status',
                        event.target.value
                      )
                    }
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={formState.status}
                    variant="outlined"
                  >
                    <option
                      disabled
                      value=""
                    />
                    {statusOptions.map(option => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                
                <TextField
                  fullWidth
                  className={classes.dateField}
                  label="Fecha de Actualización"
                  name="date"
                  onClick={() => handleCalendarOpen('date')}
                  value={moment(formState.date).format('DD/MM/YYYY')}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <TextField
                  type="hidden"
                  name="name"
                  value={formState.name}
                />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              Cerrar
            </Button>
            <Button
              className={classes.saveButton}
              onClick={onClose}
              variant="contained"
            >
              Guardar
            </Button>
          </CardActions>
          <DatePicker
            minDate={calendarMinDate}
            onAccept={handleCalendarAccept}
            onChange={handleCalendarChange}
            onClose={handleCalendarClose}
            open={calendarOpen}
            style={{ display: 'none' }} // Temporal fix to hide the input element
            value={calendarValue}
            variant="dialog"
          />
        </form>
      </Card>
    </Modal>
  );
};

PlatformEdit.displayName = 'PlatformEdit';

PlatformEdit.propTypes = {
  className: PropTypes.string,
  platform: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

PlatformEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default PlatformEdit;
