<template>
  <div class="columns" id="progress">
    <div class="column has-text-centered" v-for="(progressBar, index) in progressBars" >
      <progress-bar :key="index" :id="'progress-' + index" :chart-data="progressBar"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {

  name: 'cme-tableau',

  components: {
    ProgressBar,
  },

  props: {
    primary: {
      required: true,
      type: Object,
    },
  },

  computed: {
    
    progressBars() {
      const bars = []    

      if (this.primary.generalRequired > 0) {
        bars.push({
          earned: this.primary.general.earned,
          required: this.primary.generalRequired,
          name: 'General',
        });
      }

      if (this.primary.cat1aRequired > 0) {
        bars.push({
          earned: this.primary.general.cat1aEarned,
          required: this.primary.cat1aRequired,
          name: 'AOA Category 1-A',
        });
      }

      // TODO Handle subs
      bars.push({
        earned: this.primary.earned,
        required: this.primary.required,
        name: 'Specialty',
        subs: this.primary.subs
      })

      return bars
    }
  },

  created() {
  },


  data () {
    return {
    }
  },

}
</script>

<style>
</style>

