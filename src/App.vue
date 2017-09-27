<template>
  <div>
    <nav-header></nav-header>
    <banner>
      <salutation :name="name" v-show="!loading"></salutation>
    </banner>
    <div class="tabs banner-tabs">
      <div class="container">
        <ul>
          <router-link tag="li" to="/status" exact>
            <a>Dashboard</a>
          </router-link>
          <router-link tag="li" to="/profile">
            <a>Edit Profile</a>
          </router-link>
        </ul>
      </div> <!-- .container -->
    </div> <!-- .tabs -->
    <div class="main">
      <section class="section">
        <div class="container" v-if="cmeLoaded">
          <router-view></router-view>
        </div>
      </section>
    </div> <!-- .main -->
  </div>
</template>

<script>
import store from './store.js'
import NavHeader from './components/NavHeader.vue'
import Banner from './components/Banner.vue'
import Salutation from './components/Salutation.vue'

export default {

  components: {
    NavHeader,
    Banner,
    Salutation,
  },

  name: 'app',

  store,

  created() {

    const userId = 22

    this.$store.dispatch('fetchUser', userId)
      .then((userData) => {
        this.$store.commit('updateUser', userData.data)
        this.$store.dispatch('fetchUserCme', userId)
          .then((cmeData) => {

            const data = cmeData.data

            this.cmeLoaded = true;
            this.$store.commit('setCmeData', data)

            if (data.primaries.length) {
              this.$store.commit('setSelectedPrimary', 
                                 data.primaries[0].desc)
            }

          })
      })
      .catch(error => {
console.dir(error);
      });

  },
  
  computed: {

    name() {
      return this.$store.state.user.last_name
    },

    loading() {
      return this.$store.state.loading;
    }
  },

  data () {
    return {
      cmeLoaded: false,
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
