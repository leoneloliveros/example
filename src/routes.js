/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboards/analytics" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/users/create',
        exact: true,
        component: lazy(() => import('views/UserCreate'))
      },
      {
        path: '/management/users',
        exact: true,
        component: lazy(() => import('views/UserManagementList'))
      },
      {
        path: '/management/users/:id',
        exact: true,
        component: lazy(() => import('views/UserManagementDetails'))
      },
      {
        path: '/management/users/:id/:tab',
        exact: true,
        component: lazy(() => import('views/UserManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('views/ProjectManagementList'))
      },
      {
        path: '/management/activities',
        exact: true,
        component: lazy(() => import('views/ActivityManagementList'))
      },
      {
        path: '/management/tasks',
        exact: true,
        component: lazy(() => import('views/TaskManagementList'))
      },
      {
        path: '/management/tasks/:id',
        exact: true,
        component: lazy(() => import('views/TaskManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },
      {
        path: '/activities/create',
        exact: true,
        component: lazy(() => import('views/ActivityCreate'))
      },
      {
        path: '/activities/:id',
        exact: true,
        component: lazy(() => import('views/ActivityDetails'))
      },
      {
        path: '/activities/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ActivityDetails'))
      },
      {
        path: '/activities',
        exact: true,
        component: lazy(() => import('views/ActivityList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
