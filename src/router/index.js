import { createRouter, createWebHistory } from 'vue-router'
import TestOne from '../views/TestOne.vue'
import TestTwo from '../views/TestTwo.vue'
import TestTree from '../views/TestTree.vue'
import TestFor from '../views/TestFor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestOne
    },
    {
      path: '/test-two',
      name: 'TestTwo',
      component: TestTwo
    },
    {
      path: '/test-tree',
      name: 'TestTree',
      component: TestTree
    },

    {
      path: '/test-for',
      name: 'TestFor',
      component: TestFor
    }
  ]
})

export default router
