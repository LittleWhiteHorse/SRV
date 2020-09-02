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
        component: () => import('@/views/app/appList.vue')
      }
    ]
  },
  {
    path: '/app',
    name: 'app',
    component: Main,
    meta: {
      title: '应用管理',
      icon: 'md-apps'
    },
    children: [
      {
        path: 'list',
        name: 'app_list',
        meta: {
          icon: 'md-apps',
          title: '应用管理'
        },
        component: () => import('@/views/app/appList.vue')
      },
      {
        path: 'new_dilink',
        name: 'new_dilink',
        meta: {
          icon: 'md-add',
          title: '新建Dilink应用'
        },
        component: () => import('@/views/app/editDilinkApp.vue')
      },
      {
        path: 'new_phone',
        name: 'new_phone',
        meta: {
          icon: 'md-add',
          title: '新建手机应用',
          hideInMenu: true
        },
        component: () => import('@/views/app/editPhoneApp.vue')
      },
      {
        path: 'examine',
        name: 'examine_list',
        meta: {
          icon: 'md-checkbox-outline',
          title: '应用审核管理'
        },
        component: () => import('@/views/app/examine.vue')
      },
      {
        path: 'invalid',
        name: 'invalid_list',
        meta: {
          icon: 'md-close-circle',
          title: '应用失效管理'
        },
        component: () => import('@/views/app/invalid.vue')
      }
    ]
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: Main,
    meta: {
      title: '终端管理',
      icon: 'md-desktop'
    },
    children: [
      {
        path: 'list',
        name: 'list',
        meta: {
          icon: 'md-desktop',
          title: '终端管理'
        },
        component: () => import('@/views/terminal/terminal.vue')
      },
      {
        path: 'example',
        name: 'example',
        meta: {
          icon: 'md-filing',
          title: '应用实例管理'
        },
        component: () => import('@/views/terminal/example.vue')
      }
    ]
  },
  {
    path: '/send',
    name: 'send',
    component: Main,
    meta: {
      title: '推送任务管理',
      icon: 'md-paper-plane'
    },
    children: [
      {
        path: 'task',
        name: 'task_list',
        meta: {
          icon: 'md-clipboard',
          title: '任务管理'
        },
        component: () => import('@/views/send/taskList.vue')
      },
      {
        path: 'timing',
        name: 'timing_list',
        meta: {
          icon: 'md-time',
          title: '定时任务管理'
        },
        component: () => import('@/views/send/timingList.vue')
      },
      {
        path: 'DSystem',
        name: 'new_DSystem',
        meta: {
          icon: 'md-add',
          title: '新建Dilink系统推送'
        },
        component: () => import('@/views/send/editDiLinkSystem.vue')
      },
      {
        path: 'DApp',
        name: 'new_DApp',
        meta: {
          icon: 'md-add',
          title: '新建Dilink应用推送'
        },
        component: () => import('@/views/send/editDiLinkApp.vue')
      },
      {
        path: 'PApp',
        name: 'new_PApp',
        meta: {
          icon: 'md-add',
          title: '新建手机应用推送'
        },
        component: () => import('@/views/send/editPhoneApp.vue')
      }
    ]
  },
  {
    path: '/password',
    name: 'password',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'edit',
        name: 'edit',
        meta: {
          icon: 'ios-navigate',
          title: '修改密码',
          hideInMenu: true
        },
        component: () => import('@/views/login/password.vue')
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/views/directive/directive.vue')
      }
    ]
  }
]
