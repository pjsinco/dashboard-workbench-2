<template>
  <div>
    <nav-header></nav-header>
    <banner>{{ salutation }}</banner>
    <div class="tabs banner-tabs">
      <div class="container">
        <ul>
          <router-link tag="li" to="/status" exact>
            <a>Dashboard</a>
          </router-link>
          <router-link tag="li" to="/profile">
            <a>Edit Profile</a>
          </router-link>

          <!--<li><a href="#">Dashboard</a></li>-->
          <!--<li><a href="#">Profile</a></li>-->
        </ul>
      </div> <!-- .container -->
    </div> <!-- .tabs -->
    <div class="main">
      <section class="section">
        <div class="container">
          <router-view></router-view>
        </div>
      </section>
    </div> <!-- .main -->
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import Banner from './components/Banner.vue'

export default {

  components: {
    NavHeader,
    Banner,
  },

  name: 'app',

  

  computed: {
    salutation() {
      const hour = new Date().getHours();

      let timeOfDay

      if (hour > 16) {
        timeOfDay = 'evening'
      } else if (hour > 11) {
        timeOfDay =  'afternoon'
      } else {
        timeOfDay =  'morning'
      }

      return `Good ${timeOfDay}, Dr. ${this.lastName}!`
    }
  },

  data () {
    return {
      lastName: 'Asher',
    }
  },
}
</script>

<style lang="scss">
  @import './sass/style.scss';

  .svg-icon {
    width: 100px;
    height: 100px;
    fill: transparent;
    stroke: $border;
  }
  
  .svg-icon:hover {
    stroke: $border-hover;
  }

  .db-link {
    text-align: center;
    margin-bottom: 1rem;
  }

  a.is-active .db-link svg.svg-icon {
    stroke: $primary;
    stroke-width: 2;
  }

  a.is-active .db-link p {
    font-weight: $weight-bold;
    color: $primary;
  }

  .temp-left-nav {
    position: relative;
    top: 57px;
  }
</style>
