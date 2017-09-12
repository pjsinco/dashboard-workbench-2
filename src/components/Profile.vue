<template>
  <div>
    <div class="tabs">
      <ul>
        <router-link tag="li" to="/profile" exact>
          <a>Personal</a>
        </router-link>
        <router-link tag="li" to="/profile/contact">
          <a>Contact</a>
        </router-link>
        <router-link tag="li" to="/profile/login">
          <a>Login</a>
        </router-link>
        <router-link tag="li" to="/profile/findyourdo">
          <a>Find Your DO</a>
        </router-link>
      <!--<tab name="Personal" v-bind:selected="true">-->
        <!--<h1>This the the personal tab</h1>-->
      <!--</tab>-->
      <!--<tab name="Contact">-->
        <!--<h1>This the the contact tab</h1>-->
      <!--</tab>-->
      <!--<tab name="Login">-->
        <!--<h1>This the the login tab</h1>-->
      <!--</tab>-->
      <!--<tab name="Find Your DO">-->
        <!--<h1>This the the FYD tab</h1>-->
      <!--</tab>-->
    <!--</tabs>-->
      </ul>
    </div> <!-- .tabs -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from './Tab.vue';
  import Tabs from './Tabs.vue';

  export default {

    components: {
      Tabs, Tab,
    },

    name: 'profile',

    data () {

      return {
      }
    }
  }
</script>

<style lang="scss">
</style>

