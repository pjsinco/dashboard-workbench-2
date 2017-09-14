<template>
  <div>
    <nav-header></nav-header>
    <banner>Hello, Dr. {{ lastName }}!</banner>
    <div class="tabs banner-tabs">
      <div class="container">
        <ul>
          <router-link tag="li" to="/status" exact>
            <a>Dashboard</a>
          </router-link>
          <router-link tag="li" to="/profile">
            <a>Profile</a>
          </router-link>

          <!--<li><a href="#">Dashboard</a></li>-->
          <!--<li><a href="#">Profile</a></li>-->
        </ul>
      </div> <!-- .container -->
    </div>
    <!--<nav class="navbar is-primary db-nav">-->
      <!--<div class="container">-->
        <!--<div class="navbar-start">-->
          <!--<a class="navbar-item is-size-6" href="#">Dashboard</a>-->
          <!--<a class="navbar-item is-size-6" href="#">Profile</a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</nav>-->

    <div class="main">
      <section class="section">
        <div class="container">
          <div class="columns">
<!--             <div class="column is-one-quarter"> -->

              <!--TODO refactor below into:-->
              <!--<links>-->
                <!--<link :name="Status">-->
                <!--<link :name="Profile">-->
                <!--<link :name="Preferences">-->
              <!--</links>-->

              <!--<router-link to="/status">-->
                <!--<div class="db-link">-->
                  <!--<svg class="svg-icon" viewBox="0 0 120 120">-->
                    <!--<rect x="10" y="10" width="100" height="100" rx="5" ry="5" />-->
                  <!--</svg>-->
                  <!--<p class="is-size-5">Status</p>-->
                <!--</div>-->
              <!--</router-link>-->

              <!--<router-link to="/profile">-->
                <!--<div class="db-link">-->
                  <!--<svg class="svg-icon" viewBox="0 0 120 120">-->
                    <!--<rect x="10" y="10" width="100" height="100" rx="5" ry="5" />-->
                  <!--</svg>-->
                  <!--<p class="is-size-5">Profile</p>-->
                <!--</div>-->
              <!--</router-link>-->

              <!--<router-link to="/preferences">-->
                <!--<div class="db-link">-->
                  <!--<svg class="svg-icon" viewBox="0 0 120 120">-->
                    <!--<rect x="10" y="10" width="100" height="100" rx="5" ry="5" />-->
                  <!--</svg>-->
                  <!--<p class="is-size-5">Preferences</p>-->
                <!--</div>-->
              <!--</router-link>-->

<!--             </div> <!-- .column -->

            <div class="column auto">
              <router-view></router-view>
            </div> <!-- .col-xs-8 -->
          </div> <!-- .row -->
        </div>
      </section>
    </div> <!-- #main -->

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

  methods: {
  },

  data () {
    return {
      lastName: 'Henighan',
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

</style>
