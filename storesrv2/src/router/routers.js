import Login from '@/views/login/login'
import Main from '@/components/main/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    redirect: 'user_list',
    component: Main
  },
  {
    path: '/app',
    name: 'app',
    component: Main,
    meta: {
      title: '用户管理',
      icon: 'md-apps'
    },
    children: [
      {
        path: 'user',
        name: 'user_list',
        meta: {
          icon: 'md-person',
          title: '用户管理'
        },
        component: () => import('@/views/user-profile/userList.vue')
      },
      {
        path: 'details',
        name: 'user_details',
        meta: {
          icon: 'md-apps',
          title: '查看档案',
          hideInMenu: true
        },
        component: () => import('@/views/user-profile/userModel.vue')
      }
    ]
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: Main,
    meta: {
      title: '状态码',
      icon: 'md-desktop'
    },
    children: [
      {
        path: 'terminal',
        name: 'terminal',
        meta: {
          icon: 'md-pulse',
          title: '状态码'
        },
        component: () => import('@/views/terminal/terminal.vue')
      }
    ]
  }
]
