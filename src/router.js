import {createRouter , createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactsView from './views/ContactsView.vue';
import ShowView from './views/ShowView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ShowView,
    },
  ]
});
  // { path: '/', component: HomeView },
  // { path: '/about', name: 'home', component: AboutView },
  // { path: '/projects', name: 'home', component: ProjectsView },
  // { path: '/contacts', name: 'home', component: ContactsView },


// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })

export { router };