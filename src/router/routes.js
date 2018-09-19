
export default [
  {
    path: '/',
    component: () => import('layouts/Home'),
    children: [
      { path: 'reusingcomponent', component: () => import('pages/ReusingComponentsPage') },
      { path: 'singleton1', component: () => import('pages/SingletonPage1') },
      { path: 'singleton2', component: () => import('pages/SingletonPage2') },
      { path: 'test', component: () => import('pages/TestPage') },
      { path: 'render1', component: () => import('pages/RenderPage1') },

      { path: 'drag', component: () => import('pages/DragPage') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
