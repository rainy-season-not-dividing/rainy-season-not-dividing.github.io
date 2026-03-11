import { createRouter, createWebHistory } from 'vue-router'

// 存储页面滚动位置
const scrollPositions: Record<string, number> = {}

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue'), meta: { title: '首页' } },
    { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue'), meta: { title: '关于' } },
    { path: '/research', name: 'Research', component: () => import('@/views/ResearchListView.vue'), meta: { title: '科研经历' } },
    { path: '/research/:id', name: 'ResearchDetail', component: () => import('@/views/ResearchDetailView.vue'), meta: { title: '科研经历' } },
    { path: '/projects', name: 'Projects', component: () => import('@/views/ResearchView.vue'), meta: { title: '竞赛/编程经历' } },
    { path: '/skills', name: 'Skills', component: () => import('@/views/ProjectsView.vue'), meta: { title: '技能与开源' } },
    { path: '/blog', name: 'Blog', component: () => import('@/views/BlogListView.vue'), meta: { title: '博客' } },
    { path: '/blog/:slug', name: 'BlogPost', component: () => import('@/views/BlogPostView.vue'), meta: { title: '文章' } },
    { path: '/cv', name: 'CV', component: () => import('@/views/CVView.vue'), meta: { title: '简历' } },
    { path: '/contact', name: 'Contact', component: () => import('@/views/ContactView.vue'), meta: { title: '联系' } }
  ],
  scrollBehavior(to, from, savedPosition) {


    // 如果有保存的位置（浏览器返回操作），则恢复该位置
    if (savedPosition) {
      return savedPosition
    }

    // 从详情页返回列表页时，恢复之前存储的滚动位置

    if ((from.path.startsWith('/blog/') && to.path === '/blog') ||
      (from.path.startsWith('/research/') && to.path === '/research')) {
      if (scrollPositions[to.path] !== undefined) {
        return { top: scrollPositions[to.path] }
      }
    }
    // 其他情况，滚动到顶部
    else {
      return { top: 0 }
    }
  }
})

// 监听路由离开，存储当前页面的滚动位置
router.beforeEach((to, from, next) => {
  // 存储当前页面的滚动位置
  if (from.path === '/blog' || from.path === '/research') {
    scrollPositions[from.path] = window.scrollY
  }
  next()
})

router.afterEach((to) => {
  const title = (to.meta?.title as string) || '朱雄雄'
  document.title = title === '首页' ? '朱雄雄 | 个人主页' : `${title} | 朱雄雄`
})

export default router
