import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'
import axios from '@/axios'

Vue.use(Router)

const router = new Router({
                            mode: 'history',
                            base: process.env.BASE_URL,
                            scrollBehavior() {
                              return {
                                x: 0,
                                y: 0
                              }
                            },
                            routes: [
                              {
                                path     : '',
                                name     : 'home',
                                component: () => import('@/layouts/main/Main.vue'),
                                children : [
                                  {
                                    path     : '/',
                                    name     : 'index',
                                    component: () => import('@/views/pages/index.vue'),
                                  },
                                  {
                                    path     : '/teams',
                                    name     : 'team',
                                    component: () => import('@/views/pages/teams/index.vue'),
                                  },
                                  {
                                    path     : '/contacts',
                                    name     : 'contact',
                                    component: () => import('@/views/pages/contact/index.vue'),
                                  },
                                  {
                                    path     : '/portfolios',
                                    name     : 'portfolios',
                                    component: () => import('@/views/pages/portfolios/index.vue'),
                                  },
                                  {
                                    path     : '/portfolios/:id',
                                    name     : 'show',
                                    component: () => import('@/views/pages/portfolios/show.vue'),
                                    props    : true,
                                  },
                                ]
                              },
                              {
                                path    : '*',
                                redirect: '/error-404'
                              }
                            ]
                          })

router.afterEach((to, from) => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router