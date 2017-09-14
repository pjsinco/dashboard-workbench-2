<template>
  <div>
    <!--<div class="tabs">-->
      <!--<ul>-->
        <!--<router-link tag="li" to="/profile/contact" exact>-->
          <!--<a>Home</a>-->
        <!--</router-link>-->
        <!--<router-link tag="li" to="/profile/contact/business">-->
          <!--<a>Business</a>-->
        <!--</router-link>-->
      <!--</ul>-->
    <!--</div> [> .tabs <]-->
    
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

    name: 'profile-contact',

    data () {

      return {
      }
    }
  }
</script>

<style lang="scss">
</style>
