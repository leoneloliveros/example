import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/dashboard/top-referrals').reply(200, {
  referrals: [
    {
      id: uuid(),
      color: colors.red['500'],
      name: 'Menor a 3 días',
      initials: 'OTH',
      value: '53,032'
    },
    {
      id: uuid(),
      color: colors.orange['900'],
      name: 'Entre 5 y 3 días',
      initials: 'OTH',
      value: '39,551'
    },
    {
      id: uuid(),
      color: colors.orange['500'],
      name: 'Entre 10 y 15 días',
      initials: 'OTH',
      value: '14,093'
    },
    {
      id: uuid(),
      color: colors.orange['200'],
      name: 'Entre 15 y 30 días',
      initials: 'OTH',
      value: '7,251'
    },
    {
      id: uuid(),
      color: colors.green['500'],
      name: 'Mayor a 30 días',
      initials: 'OTH',
      value: '5,694'
    }
  ]
});

mock.onGet('/api/dashboard/profitable-products').reply(200, {
  products: [
    {
      id: uuid(),
      type: 'freelancer_basic',
      name: 'Redeban Multicolor S.A.',
      image: '/images/products/product_freelancer.svg',
      subscriptions: '14629147',
      currency: '',
      price: '10/20/2020',
      progress: 93
    },
    {
      id: uuid(),
      type: 'freelancer_extra',
      name: 'Redeban Multicolor S.A.',
      image: '/images/products/product_freelancer.svg',
      subscriptions: '1030033',
      currency: '',
      price: '15/12/2020',
      progress: 76
    },
    {
      id: uuid(),
      type: 'agency_basic',
      name: 'MANITOBA S.A.S.',
      image: '/images/products/product_agency.svg',
      subscriptions: '530022',
      currency: '',
      price: '10/12/2020',
      progress: 60
    },
    {
      id: uuid(),
      type: 'enterprise_basic',
      name: 'COMPAÑIA DE SEGUROS BOLIVAR',
      image: '/images/products/product_enterprise.svg',
      subscriptions: '1203122',
      currency: '',
      price: '20/10/2020',
      progress: 46
    },
    {
      id: uuid(),
      type: 'enterprise_extra',
      name: 'MILLENIUM PHONE CENTER',
      image: '/images/products/product_enterprise.svg',
      subscriptions: '25444444',
      currency: '',
      price: '05/10/2020',
      progress: 41
    }
  ]
});

mock.onGet('/api/dashboard/customer-activity').reply(200, {
  customers: [
    {
      id: uuid(),
      type: 'payment',
      description: 'Inicio la OTH 1212111211',
      author: {
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png'
      },
      created_at: moment().subtract(23, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Asigno la OTH 121212121',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      created_at: moment().subtract(56, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Terminó la OTH 1222222',
      author: {
        name: 'Alexa Richardson',
        avatar: '/images/avatars/avatar_4.png'
      },
      created_at: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Terminó la OTH 122233333',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      created_at: moment().subtract(5, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Canceló la OTH 1222222',
      author: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      created_at: moment().subtract(5, 'minutes')
    }
  ]
});

mock.onGet('/api/dashboard/earnings').reply(200, {
  earnings: [
    {
      id: uuid(),
      label: 'Terminadas',
      value: 56,
      color: colors.indigo[500]
    },
    {
      id: uuid(),
      label: 'En tiempo',
      value: 24,
      color: colors.indigo[300]
    },
    {
      id: uuid(),
      label: 'Destiempo',
      value: 20,
      color: colors.indigo[100]
    }
  ]
});

mock.onGet('/api/dashboard/latest-orders').reply(200, {
  orders: [
    {
      id: uuid(),
      ref: 'DEV1042',
      items: 'Ejecutor',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io'
      },
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'DEV1041',
      items: 'Ejecutor',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Cao Yu',
        email: 'cao.yu@devias.io'
      },
      status: 'complete'
    },
    {
      id: uuid(),
      ref: 'DEV1040',
      items: 'Dispatcher',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Alexa Richardson',
        email: 'alexa.richardson@devias.io'
      },
      status: 'rejected'
    },
    {
      id: uuid(),
      ref: 'DEV1039',
      items: 'Ejecutor',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Anje Keizer',
        email: 'anje.keiser@devias.io'
      },
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'DEV1038',
      items: 'Dispatcher',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Clarke Gillebert',
        email: 'clarke.gillebert@devias.io'
      },
      status: 'complete'
    },
    {
      id: uuid(),
      ref: 'DEV1037',
      items: 'Dispatcher',
      value: 'Cambio de Servicio',
      currency: '',
      customer: {
        name: 'Merrile Burgett',
        email: 'merrile.burgett@devias.io'
      },
      status: 'complete'
    }
  ]
});

mock.onGet('/api/dashboard/latest-projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      price: '12,500',
      currency: '',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Dashboard Design',
      price: '15,750',
      currency: '',
      author: {
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png'
      },
      tags: [
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Ten80 Web Design',
      price: '15,750',
      currency: '',
      author: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png'
      },
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Neura e-commerce UI Kit',
      price: '12,500',
      currency: '',
      author: {
        name: 'Leonel Oliveros',
        avatar: '/images/avatars/avatar_11.png'
      },
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Administrator Dashboard',
      price: '15,750',
      currency: '',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ]
    }
  ]
});
