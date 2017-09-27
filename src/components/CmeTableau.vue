<template>
  <div class="column">
    <progress-bar v-for="(progressBar, index) in progressBars" :key="index" :id="'progress-' + index" :chart-data="progressBar"></progress-bar>
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
        });
      }

      if (this.primary.cat1aRequired > 0) {
        bars.push({
          earned: this.primary.general.cat1aEarned,
          required: this.primary.cat1aRequired,
        });
      }

      // TODO ... handle primaries, subs

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

