/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import { useTranslation } from 'react-i18next';

import { Label } from 'components';

const NavigationConfig = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.pages.title'),
      pages: [
        {
          title: t('sidebar.pages.dashboards'),
          href: '/dashboards',
          icon: DashboardIcon,
          children: [
            {
              title: 'Analytics',
              href: '/dashboards/analytics'
            }
          ]
        },
        {
          title: t('sidebar.pages.management'),
          href: '/management',
          icon: BarChartIcon,
          children: [
            {
              title: 'Proyectos',
              href: '/management/projects'
            },
            {
              title: 'Actividades',
              href: '/management/activities'
            },
            {
              title: t('sidebar.pages.management.users'),
              href: '/management/users'
            },
            
          ]
        },
        {
          title: 'Tareas',
          href: '/tasks',
          icon: FolderIcon,
          children: [
            {
              title: 'Ver',
              href: '/management/tasks'
            }
          ]
        },
        {
          title: 'Chat',
          href: '/chat',
          icon: ChatIcon,
          label: () => (
            <Label
              color={colors.red[500]}
              shape="rounded"
            >
              4
            </Label>
          )
        },
        {
          title: 'Calendario',
          href: '/calendar',
          icon: CalendarTodayIcon
        },
        {
          title: 'Settings',
          href: '/settings',
          icon: SettingsIcon,
          children: [
            {
              title: 'General',
              href: '/settings/general'
            }
          ]
        }
      ]
    }
  ];
};

export default NavigationConfig;
