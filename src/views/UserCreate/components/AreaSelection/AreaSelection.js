import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  colors
} from '@material-ui/core';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles(theme => ({
  root: {},
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
    '& + &': {
      marginTop: theme.spacing(2)
    }
  },
  selectedOption: {
    backgroundColor: colors.grey[50]
  },
  optionRadio: {
    margin: -10
  },
  nested: {
    marginLeft: theme.spacing(2)
  }
}));


const AreaSelection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const options = [
    {
      value: 'freelancer',
      title: 'I\'m a freelancer',
      description: 'I\'m looking for teamates to join in a personal project'
    },
    {
      value: 'projectOwner',
      title: 'I’m a project owner',
      description:
        'I\'m looking for freelancer or contractors to take care of my project'
    },
    {
      value: 'affiliate',
      title: 'I want to join affiliate',
      description:
        'I\'m looking for freelancer or contractors to take care of my project'
    }
  ];

  const [data, setData] = useState([{name: "Pymes", roles: [{ name: "Executor"}, { name: "Dispatcher" }]}, {name: "Configuration", roles: [{ name: "Executor"}, { name: "Dispatcher" }]}, {name: "Pymes", roles: [{ name: "Executor"}, { name: "Dispatcher" }]}, {name: "Pymes", roles: [{ name: "Executor"}, { name: "Dispatcher" }]}, {name: "Pymes", roles: [{ name: "Executor"}, { name: "Dispatcher" }]}]);
  const [information, setInformation] = useState([]);

  const handleExpandClick = (value, index, info = data) => {
    const area = { ...data[index], expanded: !data[index].expanded};
    info[index] = area;
    setData([...info]);
  };

  const dataConstructor = (checkboxInformation, selectedData, area, role) => {
    const feature = {
      ...checkboxInformation[area.index].roles[role.index],
      checked: !checkboxInformation[area.index].roles[role.index].checked
    };
    checkboxInformation[area.index].roles[role.index] = feature;
    if (feature.checked) {
      selectedData.push({ area: area.name, role: role.name });
    } else {
      selectedData = selectedData.filter((item) =>  (!( item.area == area.name && item.role == role.name )));
    }
    return { selectedData, checkboxInformation }
  }

  const handleCheckClick = (area, role, checkboxInformation = data, selectedData = information) => {
    if (typeof role !== "undefined") {
      const functionData = dataConstructor(checkboxInformation, selectedData, area, role);
      selectedData = functionData.selectedData;
      checkboxInformation = functionData.checkboxInformation;
    } else {
      const areaInformation = { ...checkboxInformation[area.index], checked: !checkboxInformation[area.index].checked};
      checkboxInformation[area.index] = areaInformation;
      checkboxInformation[area.index].roles.map((child, index) => {
        const functionData = dataConstructor(checkboxInformation, selectedData, area, {name: child.name, index });
        selectedData = functionData.selectedData
        checkboxInformation = functionData.checkboxInformation;
      });
    }
    setInformation([...selectedData])
    setData([...checkboxInformation]);
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Seleccione el rol del usuario" />
      <CardContent>
      
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <List component="nav">
              { data.map((area, parentIndex) => (
                <p key={parentIndex}>
                  <ListItem dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={area.checked || ''}
                        onChange={() =>
                          handleCheckClick({ name: area.name, index: parentIndex})
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Area: ${area.name}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        className={classes.rightIcons}
                        onClick={() =>
                          handleExpandClick(area.name, parentIndex)
                        }
                      >
                        {area.expanded ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse
                    unmountOnExit
                    in={area.expanded || false}
                    timeout="auto"
                  >
                    <List disablePadding component="p">
                      {area.roles.map((feature, childIndex) => (
                        <ListItem
                          key={feature.id}
                          dense
                          className={classes.nested}
                        >
                          <ListItemIcon>
                            <Checkbox
                              disableRipple
                              edge="start"
                              checked={feature.checked || ''}
                              tabIndex={-1}
                              onChange={() =>
                                handleCheckClick(
                                  {name: area.name, index: parentIndex},
                                  {name: feature.name, index: childIndex}
                                )
                              }
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Rol: ${feature.name}`}
                          />
                        </ListItem>
                      ))}
                   
                    </List>
                  </Collapse>
  
                </p>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AreaSelection.propTypes = {
  className: PropTypes.string
};

export default AreaSelection;
