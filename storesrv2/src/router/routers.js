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
    component: Main,
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '登记用户',
      icon: 'md-apps'
    },
    component: Main,
    children: [
      {
        path: 'registerUser',
        name: 'register_user',
        meta: {
          hideInMenu: true,
          icon: 'md-apps',
          title: '登记用户'
        },
        component: () => import('@/views/register/registerUser.vue')
      }
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
          icon: 'md-person',
          title: '用户档案'
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
      title: '激活码',
      icon: 'md-desktop'
    },
    children: [
      {
        path: 'terminal',
        name: 'terminal',
        meta: {
          icon: 'md-pulse',
          title: '激活码'
        },
        component: () => import('@/views/terminal/terminal.vue')
      }
    ]
  }
]
