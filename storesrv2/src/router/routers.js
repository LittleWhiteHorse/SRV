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
        path: '/details/:id',
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
