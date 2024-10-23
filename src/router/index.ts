import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfessionalExperiences from '../views/ProfessionalExperiencesView.vue'

// Define the routes with proper typing
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'experiences',
    component: ProfessionalExperiences,
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import('../views/PublicationsView.vue'),
  },
]

// Create and type the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
