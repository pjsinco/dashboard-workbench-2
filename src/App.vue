<template>
  <div>
    <nav-header></nav-header>

    <div class="main">
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter">
              <div class="db-link">
                <a href="#">
                  <svg class="svg-icon" viewBox="0 0 120 120">
                    <rect x="10" y="10" width="100" height="100" rx="5" ry="5" />
                  </svg>
                  <h3>Status</h3>
                </a>
              </div>
              <div class="db-link">
                <a href="#">
                  <svg class="svg-icon" viewBox="0 0 120 120">
                    <rect x="10" y="10" width="100" height="100" rx="5" ry="5" />
                  </svg>
                  <h3>Profile</h3>
                </a>
              </div>
              <div class="db-link">
                <a href="#">
                  <svg class="svg-icon" viewBox="0 0 120 120">
                    <rect x="10" y="10" width="100" height="100" rx="5" ry="5" />
                  </svg>
                  <h3>Preferences</h3>
                </a>
              </div>
            </div> <!-- .column -->
            <div class="column auto">
              <h3>How are you?</h3>
            </div> <!-- .col-xs-8 -->
          </div> <!-- .row -->
        </div>
      </section>
    </div> <!-- #main -->

  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'

export default {

  components: {
    NavHeader,
  },

  name: 'app',

  data () {
    return {
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
  }


</style>
