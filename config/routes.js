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
    path: '/mpayH5Helper',
    layout: false,
    name: 'Mpay支付',
    routes: [
      {
        exact: true,
        access: 'canPublic',
        path: '/mpayH5Helper/:orderId',
        name: '支付系統',
        component: './MpayHelper/index',
      },
    ],
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
    access: 'canAdmin',
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
    ],
  },
  {
    component: './404',
  },
];
