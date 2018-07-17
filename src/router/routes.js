
export default [
  {
    path: '/',
    component: () => import('layouts/Home'),
    children: [
      { path: 'reusingcomponent', component: () => import('pages/ReusingComponentsPage') },
      { path: 'singleton1', component: () => import('pages/SingletonPage1') },
      { path: 'singleton2', component: () => import('pages/SingletonPage2') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
