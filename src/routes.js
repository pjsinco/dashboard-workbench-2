import VueRouter from 'vue-router';
import Status from './components/Status.vue';
import Profile from './components/Profile.vue';
import ProfilePersonal from './components/profiles/Personal.vue';
import ProfileContact from './components/profiles/Contact.vue';
import ProfileLogin from './components/profiles/Login.vue';
import ProfileFindYourDo from './components/profiles/FindYourDo.vue';
import Preferences from './components/Preferences.vue';


let routes = [
  {
    path: '/status',
    component: Status,
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '',
        component: ProfilePersonal,
      },
      {
        path: 'contact',
        component: ProfileContact,
      },
      {
        path: 'login',
        component: ProfileLogin,
      },
      {
        path: 'findyourdo',
        component: ProfileFindYourDo,
      },
    ],
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
