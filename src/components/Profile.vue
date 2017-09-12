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
      </ul>
    </div> <!-- .tabs -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

    name: 'profile',

    data () {

      return {
      }
    }
  }
</script>

<style lang="scss">
</style>

