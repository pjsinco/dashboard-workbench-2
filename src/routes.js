import VueRouter from 'vue-router';
import Status from './components/Status.vue';
import Profile from './components/Profile.vue';
import Preferences from './components/Preferences.vue';


let routes = [
  {
    path: '/status',
    component: Status,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/preferences',
    component: Preferences,
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});
