import { createRouter, createWebHistory } from 'vue-router'

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
  ]
})

router.afterEach((to) => {
  const title = (to.meta?.title as string) || '朱雄雄'
  document.title = title === '首页' ? '朱雄雄 | 个人主页' : `${title} | 朱雄雄`
})

export default router
