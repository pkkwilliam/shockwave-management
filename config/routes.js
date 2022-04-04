export default [
  {
    path: '/',
    redirect: '/welcome',
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
          {
            path: '/user',
            routes: [
              {
                name: 'Hive試用',
                path: '/user/trial',
                component: './user/Trial',
              },
            ],
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
    path: '/companyAdmin',
    name: '行政管理',
    icon: 'crown',
    routes: [
      {
        path: '/companyAdmin/companyConfig',
        name: '系統設定',
        icon: 'smile',
        component: './companyAdmin/CompanyConfig/index',
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
        path: '/companyManager/printer',
        name: '打印機',
        icon: 'smile',
        component: './company/Printer/index',
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
        component: './companyManager/CompanyBusiness/index',
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
        name: '規格總覽',
        icon: 'smile',
        component: './companyManager/ItemSpecification/index',
      },
      {
        path: '/companyManagerItem/itemSpecificationStock',
        name: '庫存總覽',
        icon: 'smile',
        component: './shopManager/ItemSpecificationStock/index',
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
    path: '/shopManager',
    name: '訂單',
    icon: 'crown',
    routes: [
      {
        path: '/shopManager/internalOrder',
        name: '內部訂單',
        icon: 'smile',
        component: './shopManager/order/InternalOrder/index',
      },
    ],
  },
  {
    path: '/wechatMiniProgram',
    name: '微信小程序',
    icon: 'smile',
    component: './WechatMiniProgram/index',
  },
  {
    path: '/checkoutCounter',
    name: '收銀',
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
    component: './404',
  },
];
