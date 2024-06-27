import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import AboutMe from './views/AboutMe.vue';
import Contact from './views/Contact.vue';
import Projects from './views/Projects.vue';
import Empty from './views/Empty.vue';

const routes = [
  { path: '/', component: Empty },
  { path: '/about-me', component: AboutMe },
  { path: '/projects', component: Projects},
  { path: '/contact', component: Contact},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

