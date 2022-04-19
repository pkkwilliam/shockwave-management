export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    hideInMenu: true,
    path: '/welcome',
    name: 'welcome',
    component: './Welcome',
  },
  {
    hideInMenu: true,
    path: '/account',
    name: '賬號',
    routes: [
      {
        path: '/account/settings',
        name: '個人設置',
        component: './user/Account/index',
      },
    ],
  },
  {
    hideInMenu: true,
    exact: true,
    layout: false,
    access: 'canPublic',
    path: '/h5/:transactionId',
    name: '助力API',
    component: './H5/index',
  },
  {
    hideInMenu: true,
    exact: true,
    layout: false,
    access: 'canPublic',
    path: '/result/:transactionId',
    name: '助力API',
    component: './Result/index',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },

      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: '助力管理',
    routes: [
      {
        path: '/admin/company',
        name: '企業',
        component: './admin/Company/index',
      },
      {
        path: '/admin/apiToken',
        name: 'API Token',
        component: './admin/ApiToken/index',
      },
      {
        path: '/admin/payment',
        name: '支付請求',
        component: './admin/Payment/index',
      },
    ],
  },
  {
    component: './404',
  },
];
