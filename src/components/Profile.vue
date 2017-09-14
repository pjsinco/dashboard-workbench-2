<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <nav class="panel temp-left-nav">
        <router-link class="panel-block" tag="a" to="/profile" exact>Personal</router-link>
        <router-link class="panel-block" tag="a" to="/profile/contact">Home</router-link>
        <router-link class="panel-block" tag="a" to="/profile/contact/business">Business</router-link>
        <router-link class="panel-block" tag="a" to="/profile/login">Login</router-link>
        <router-link class="panel-block" tag="a" to="/profile/findyourdo">Find Your DO</router-link>
      </nav>
    </div>
    <div class="column is-9">
      <router-view></router-view>
    </div>
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

