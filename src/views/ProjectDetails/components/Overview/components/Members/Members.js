import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
  colors,
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  },
  actions: {
    backgroundColor: colors.grey[50]
  },
  manageButton: {
    width: '100%'
  }
}));

const Members = props => {
  const { members, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        className={classes.header}
        title="Contactos del Proyecto"
        titleTypographyProps={{
          variant: 'overline'
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {members.map(member => (
            <ListItem
              disableGutters
              key={member.id}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Author"
                  className={classes.avatar}
                  src={member.avatar}
                >
                  {getInitials(member.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={member.name}
                primaryTypographyProps={{ variant: 'h6' }}
                secondary={member.bio}
              />
              <ListItemSecondaryAction>
                <a href={`mailto:${member.mail}`}>
                <Tooltip title={member.mail} aria-label="add">
                  <IconButton edge="end" aria-label="delete">
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                </a>
                <a href={`tel:${member.phone}`}>
                <Tooltip title={member.phone} aria-label="add">
                  <IconButton edge="end" aria-label="delete">
                    <PhoneIcon />
                  </IconButton>
                </Tooltip>
                </a>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button className={classes.manageButton}>Editar Contactos</Button>
      </CardActions>
    </Card>
  );
};

Members.propTypes = {
  className: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default Members;
