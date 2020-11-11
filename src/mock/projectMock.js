import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Kickoff',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Terceros',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Ultima Milla',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Configuracion NCV',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Terceros',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'COMPUNET S.A',
      author: {
        name: 'Alexander Franco',
        avatar: 'Mpls Intranet Domestic'
      },
      price: '13553525',
      currency: '',
      type: 'Obra Civil',
      location: 'Bogota D.C',
      status: '2- En ejecución',
      members: '$Traslado Interno',
      tags: [
        {
          text: 'OTH Configuracion NCV',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
  ]
});

mock.onGet('/api/projects/1').reply(200, {
  project: {
    title: 'COMPUNET S.A',
    author: {
      name: 'Alexander Franco',
      avatar: '',
      bio: 'Ingeniero Nivel 1'
    },
    brief: `
#### Dirección
Calle 24b #44a-19
#### Información General

Edificio con varios canales para instalación de fibra óptica, ubicada al noroccidente de la ciudad de bogota y con areas de derrumbes.

#### Metas:
  - Instalar fibra óptica
  - Diseño para instalaciones
  - Utilización de dispositivos ultrasonicos
    `,
    price: '13553525',
    currency: '',
    tags: [
      {
        text: '$Traslado Interno',
        color: colors.indigo[600]
      }
    ],
    members: [
      {
        id: uuid(),
        name: 'Alexander Franco',
        avatar: '',
        bio: 'Ingeniero Aprovisionamiento Estándar',
        phone:  123456789,
        mail: 'leoneloliveros.co@gmail.com'
      },
      {
        id: uuid(),
        name: 'Melani Viveros',
        avatar: '',
        bio: 'Coordinador Estándar',
        phone:  3102129290,
        mail: 'leoneloliveros.co@gmail.com'
      },
      {
        id: uuid(),
        name: 'Cristian Ramirez',
        avatar: '',
        bio: 'Coordinador Estándar',
        phone: 3102852816,
        mail: 'leoneloliveros.co@gmail.com'
      }
    ],
    files: [
      {
        id: uuid(),
        name: 'example-project1.jpg',
        url: '/images/projects/project_2.jpg',
        mimeType: 'image/png',
        size: 1024 * 1024 * 3
      },
      {
        id: uuid(),
        name: 'docs.zip',
        url: '#',
        mimeType: 'application/zip',
        size: 1024 * 1024 * 25
      },
      {
        id: uuid(),
        name: 'example-project2.jpg',
        url: '/images/projects/project_1.jpg',
        mimeType: 'image/png',
        size: 1024 * 1024 * 2
      }
    ],
    activities: [
      {
        id: uuid(),
        subject: 'Project owner',
        subject_type: 'user',
        action_type: 'upload_file',
        action_desc: 'Subio un archivo',
        created_at: moment().subtract(23, 'minutes')
      },
      {
        id: uuid(),
        subject: 'Leonel Olivero',
        subject_type: 'user',
        action_type: 'join_team',
        action_desc: 'Agrego un nuevo usuario',
        created_at: moment().subtract(2, 'hours')
      },
    ],
    subscribers: [
      {
        id: uuid(),
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        cover: '/images/covers/cover_1.jpg',
        common_connections: 12,
        labels: [
          'User Experience',
          'FrontEnd development',
          'HTML5',
          'VueJS',
          'ReactJS'
        ]
      },
      {
        id: uuid(),
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 5,
        labels: [
          'User Interface',
          'FullStack development',
          'Angular',
          'ExpressJS'
        ]
      },
      {
        id: uuid(),
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 17,
        labels: ['BackEnd development', 'Firebase', 'MongoDB', 'ExpressJS']
      }
    ],
    deadline: moment().add(7, 'days'),
    updated_at: moment().subtract(23, 'minutes')
  }
});
