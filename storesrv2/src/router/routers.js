import Login from '@/views/login/login'
import Main from '@/components/main/main'

export default [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Main,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          hideInMenu: true
        },
        component: () => import('@/views/app/userList.vue')
      }
    ]
  },
  // {
  //   path: '/app',
  //   name: 'app',
  //   // component: Main,
  //   meta: {
  //     title: '登记用户',
  //     icon: 'md-apps'
  //   },
  //   children: [
  //     {
  //       path: 'registerUser',
  //       name: 'register_user',
  //       meta: {
  //         icon: 'md-apps',
  //         title: '登记用户'
  //       },
  //       component: () => import('@/views/app/registerUser.vue')
  //     }
  //   ]
  // },
  {
    path: '/register',
    name: 'register',
    meta: {
      // hideInBread: true
      title: '登记用户',
      icon: 'md-apps'
    },
    component: Main,
    children: [
      {
        path: 'registerUser',
        name: 'register_user',
        meta: {
          icon: 'md-apps',
          title: '登记用户'
        },
        component: () => import('@/views/register/registerUser.vue')
      },
      {
        path: 'registerModel',
        name: 'register_model',
        meta: {
          icon: 'md-apps',
          title: '弹窗'
        },
        component: () => import('@/views/register/modules/registerModel.vue')
      },
      {
        path: 'success',
        name: 'success_modal',
        meta: {
          icon: 'md-apps',
          title: '开通成功'
        },
        component: () => import('@/views/register/modules/successModal.vue')
      },
      {
        path: 'used',
        name: 'used_modal',
        meta: {
          icon: 'md-apps',
          title: '手机号码被占用'
        },
        component: () => import('@/views/register/modules/usedModal.vue')
      },
      {
        path: 'different',
        name: 'different_modal',
        meta: {
          icon: 'md-apps',
          title: '购车手机号不一致'
        },
        component: () => import('@/views/register/modules/differentModal.vue')
      },
      {
        path: 'idCardDiff',
        name: 'idCardDiff_modal',
        meta: {
          icon: 'md-apps',
          title: '购车手机号不一致二'
        },
        component: () => import('@/views/register/modules/idCardDiffModal.vue')
      },
    ]
  },
  {
    path: '/app',
    name: 'app',
    component: Main,
    meta: {
      title: '用户档案',
      icon: 'md-apps'
    },
    children: [
      {
        path: 'user',
        name: 'user_list',
        meta: {
          icon: 'md-apps',
          title: '用户档案'
        },
        component: () => import('@/views/app/userList.vue')
      }
    ]
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: Main,
    meta: {
      title: '激活码',
      icon: 'md-desktop',
    },
    children: [
      {
        path: 'terminal',
        name: 'terminal',
        meta: {
          icon: 'md-desktop',
          title: '激活码'
        },
        component: () => import('@/views/terminal/terminal.vue')
      }
    ]
  },
  // {
  //   path: '/send',
  //   name: 'send',
  //   component: Main,
  //   meta: {
  //     title: '推送任务管理',
  //     icon: 'md-paper-plane'
  //   },
  //   children: [
  //     {
  //       path: 'task',
  //       name: 'task_list',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '任务管理'
  //       },
  //       component: () => import('@/views/send/taskList.vue')
  //     },
  //     {
  //       path: 'timing',
  //       name: 'timing_list',
  //       meta: {
  //         icon: 'md-time',
  //         title: '定时任务管理'
  //       },
  //       component: () => import('@/views/send/timingList.vue')
  //     },
  //     {
  //       path: 'DSystem',
  //       name: 'new_DSystem',
  //       meta: {
  //         icon: 'md-add',
  //         title: '新建Dilink系统推送'
  //       },
  //       component: () => import('@/views/send/editDiLinkSystem.vue')
  //     },
  //     {
  //       path: 'DApp',
  //       name: 'new_DApp',
  //       meta: {
  //         icon: 'md-add',
  //         title: '新建Dilink应用推送'
  //       },
  //       component: () => import('@/views/send/editDiLinkApp.vue')
  //     },
  //     {
  //       path: 'PApp',
  //       name: 'new_PApp',
  //       meta: {
  //         icon: 'md-add',
  //         title: '新建手机应用推送'
  //       },
  //       component: () => import('@/views/send/editPhoneApp.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/password',
  //   name: 'password',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'edit',
  //       name: 'edit',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '修改密码',
  //         hideInMenu: true
  //       },
  //       component: () => import('@/views/login/password.vue')
  //     }
  //   ]
  // },

]
