
const routes = [
  {
    path: '/',
    component: () => import('layouts/Index.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') },
      { path: 'SignUp', component: () => import('pages/SignUp.vue') },
      { path: 'ConditionTerms', component: () => import('pages/ConditionTerms.vue') },
      { path: 'CheckSubscription', component: () => import('pages/CheckSubscription.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
