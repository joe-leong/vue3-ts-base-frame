import type { RouteRecordRaw } from 'vue-router'
declare type Config = {
  meta?: {
    title: string
    perms: string
  }
}

// 路由规则
const routes: RouteRecordRaw[] = [
  //   {
  //     path: '/home',
  //     name: 'home',
  //     component: () => import('@/views/HomePage.vue')
  //   },
  //   {
  //     path: '/login',
  //     name: 'login',
  //     component: () => import('@/views/LoginPage.vue')
  //   }
]
const pages = import.meta.glob('/src/views/**/page.ts', {
  eager: true,
  import: 'default'
})
for (const page in pages) {
  const config = pages[page]
  const name = page.replace(/\/src\/views\/(.*)\/page.ts/, '$1')
  routes.push({
    path: `/${name}`,
    name,
    meta: (config as Config).meta,
    component: () => import(`@/views/${name}/${name}.vue`)
  })
}

export default routes
