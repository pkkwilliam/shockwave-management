export default [
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
    name: 'admin',
    icon: 'crown',
    routes: [
      {
        path: '/admin/company',
        name: '企業',
        icon: 'smile',
        component: './admin/Company/index',
      },
      {
        path: '/admin/user',
        name: '用戶',
        icon: 'smile',
        component: './admin/User/index',
      },
    ],
  },
  {
    path: '/companyManager',
    name: '管理',
    icon: 'crown',
    routes: [
      {
        path: '/companyManager/user',
        name: '內部人員',
        icon: 'smile',
        component: './companyManager/UserManage/index',
      },
      {
        path: '/companyManager/shop',
        name: '門店/倉庫',
        icon: 'smile',
        component: './companyManager/Shop/index',
      },
      {
        path: '/companyManager/companyBusiness',
        name: '客戶',
        icon: 'smile',
        component: './companyManager/companyBusiness/index',
      },
    ],
  },
  {
    path: '/companyManagerItem',
    name: '商品管理',
    icon: 'crown',
    routes: [
      {
        path: '/companyManagerItem/category',
        name: '標簽',
        icon: 'smile',
        component: './company/Category/index',
      },
      {
        path: '/companyManagerItem/item',
        name: '商品',
        icon: 'smile',
        component: './company/Item/index',
      },
      {
        path: '/companyManagerItem/itemSpecification',
        name: '商品規格',
        icon: 'smile',
        component: './companyManager/ItemSpecification/index',
      },
      {
        path: '/companyManagerItem/itemSpecificationPriceTemplate',
        name: '價格模版',
        icon: 'smile',
        component: './companyManager/ItemSpecificationPriceTemplate/index',
      },
    ],
  },
  {
    path: '/checkoutCounter',
    name: '收銀台',
    icon: 'smile',
    component: './CheckoutCounter/index',
  },

  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
